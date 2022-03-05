import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Login from './Login';

function MiniBar() {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	};
	useEffect(() => {
		if (loading) return;
		if (!user) return ;
		fetchUserName();
	}, [user, loading]);

	return (
		<>
			<div className="minibar">
				<button className='w-16 h-8 font-extrabold transition-all duration-300 bg-pink-500 rounded-md hover:bg-white hover:text-pink-500 hover:rounded-sm'>Login</button>
				
			</div>
			<Login />
		</>
	)
}

export default MiniBar;