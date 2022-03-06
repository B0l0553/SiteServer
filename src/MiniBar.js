import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Route, useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Login from "./Login";

const MiniBar = () => {
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
		if (!user) return;
		fetchUserName();
	}, [user, loading]);

	if(!user){
		return (
			<>
				<div className="minibar">
					<Link to='/login'>
						<button className='bg-pink-500 rounded-md login-minibar-button hover:bg-white hover:text-pink-500 hover:rounded-sm'>
							Login
						</button>
					</Link>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div className="minibar">
					<div className="relative flex flex-row w-auto h-auto bg-pink-500 ">
						<img src={user?.photoURL} className='object-cover w-8 h-8 m-2 rounded-full' ></img>
						<div className="m-2">{name}</div>
					</div>
				</div>
			</>
		)
	}
	
}
// TODO: LOGOUT
// TODO: MENU PERSO
export default MiniBar;