import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle, logInWithEmailAndPassword, auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from 'react-icons/fc';

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
      <div className="login">
        <div className="flex flex-col">
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
        </div>
        
        <div className="grid h-8 m-2">
          <button className="w-16 m-1 transition-all duration-200 border-2 rounded-lg border-emerald-600 hover:border-white h-7 hover:bg-emerald-500" onClick={() => logInWithEmailAndPassword(email, password)}>
            Login
          </button>

          <div className="flex flex-row h-8 mx-auto my-auto">
            <button className='w-auto m-1 transition-all duration-300 border-2 border-pink-500 h-9 rounded-3xl hover:bg-pink-400 hover:border-white' onClick={signInWithGoogle}>
              <FcGoogle size={32} />
            </button>
          </div>
          <div className="m-2">
            Don't have an account? <Link className='text-blue-600' to="/register">Register</Link> now.
          </div>
        </div>
      </div>
  );
}

export default Login;