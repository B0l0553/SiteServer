import { initializeApp } from "firebase/app";
import
{
	GoogleAuthProvider,
	GithubAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";

import
{
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
	getDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBBRVQt9adwIybGIU-Id5tkEJH2QLUU_Y0",
	authDomain: "wysiwyh.firebaseapp.com",
	projectId: "wysiwyh",
	storageBucket: "wysiwyh.appspot.com",
	messagingSenderId: "582778144025",
	appId: "1:582778144025:web:2e145d5bdbaec8e1df7188",
	measurementId: "G-XYP9VM27KZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithGithub = async () => {
	try {
		const res = await signInWithPopup(auth, githubProvider);
		const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		const docs = await getDocs(q);
		if(docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "github",
				email: user.email,
			});
		} 
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
}

/**
 * @deprecated
 * 
 */
const logInWithEmailAndPassword = async (email, password) => {
	try {
	  await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
	  console.error(err);
	  alert(err.message);
	}
};

/**
 * @deprecated
 */
const registerWithEmailAndPassword = async (name, email, password) => {
	try {
	  const res = await createUserWithEmailAndPassword(auth, email, password);
	  const user = res.user;
	  await addDoc(collection(db, "users"), {
		uid: user.uid,
		name,
		authProvider: "local",
		email,
	  });
	} catch (err) {
	  console.error(err);
	  alert(err.message);
	}
};

/**
 * @deprecated
 */
const sendPasswordReset = async (email) => {
	try {
	  await sendPasswordResetEmail(auth, email);
	  alert("Password reset link sent!");
	} catch (err) {
	  console.error(err);
	  alert(err.message);
	}
};

/**
 * @deprecated
 */
const logout = () => {
	signOut(auth);
};

export {
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
};