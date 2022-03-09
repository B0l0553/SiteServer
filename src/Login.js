import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithGithub, logInWithEmailAndPassword, auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (loading) {
		// maybe trigger a loading screen
		return;
		}
		if (user) navigate("/dashboard");
	}, [user, loading]);
	
	return (
		<div className='text-black bg-pink-500'>
			<OAuthIcon icon={<FcGoogle size='32' />} OAuthCallback={signInWithGoogle} />
			<OAuthIcon icon={<FaGithub size='32'/>} OAuthCallback={signInWithGithub} />

			{/*<div className="flex flex-col items-center justify-center mx-auto my-auto">
				<input
					type="text"
					className="m-1 border-2 border-black rounded-sm"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
					/>
				<input
					type="password"
					className='m-1 border-2 border-black rounded-sm'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					/>
				<button className="w-16 m-1 transition-all duration-200 border-2 rounded-lg border-emerald-600 hover:border-white h-7 hover:bg-emerald-500" onClick={() => logInWithEmailAndPassword(email, password)}>
					Login
				</button>
			</div>
			
			<div className="flex flex-row h-8 mx-auto">
				<OAuthIcon icon={<FcGoogle size='32' />} OAuthCallback={signInWithGoogle} />
				<OAuthIcon icon={<FaGithub size='32'/>} OAuthCallback={signInWithGithub} />
			</div>
			
			<div className="m-2">
				Don't have an account? <Link className='text-blue-600' to="/register">Register</Link> now.
			</div>*/}
		</div>
  );
}

const OAuthIcon = ({icon, OAuthCallback}) => {
	return (
		<button className='items-center justify-center m-2 transition-all duration-300 bg-white rounded-full w-9 h-9 hover:bg-white hover:text-black' onClick={OAuthCallback}>
			{icon}
		</button>
	)
}

export default Login;