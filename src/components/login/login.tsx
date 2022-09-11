import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import config from "../../config";

function Login(){
    const auth = getAuth(config);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("This user is successfully signed in")
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
    });
    }
    return (
        <>
        <div className="main">
            <div className="App">
                <h1>Email</h1>
                <input type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <h1>Password</h1>
                <input type={"password"} placeholder="please enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={signIn}>Sign In</button>
            </div>

        </div>
        </>
    );
}

export default Login; 
