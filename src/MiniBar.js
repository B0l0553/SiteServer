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
			<div className="minibar">
				<Login />
			</div>
		)
	} else {
		return (
			<div className="minibar">
				<div className="relative flex flex-row w-32 h-auto transition-all bg-pink-500 cursor-pointer group hover:bg-pink-600">
					<img src={user?.photoURL} alt='PFP' className='object-cover w-8 h-8 m-2 rounded-full' />
					<span className="my-auto">{name}</span>
					<div className="absolute flex flex-col w-32 transition-all duration-500 scale-100 bg-white group-hover:scale-100 rounded-b-md top-12">
						<button onClick={logout} className='font-extrabold text-red-600 transition-all duration-500 bg-white border-2 rounded hover:text-white hover:bg-red-600'>LOGOUT</button>
					</div>
				</div>
			</div>
		)
	}
	
}
export default MiniBar;