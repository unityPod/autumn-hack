import React from "react";
import { useForm } from "react-hook-form";
import logo from '../src/assets/logo.png';
import { useState } from "react";
// import Input from '../Forms/Inputs/Input';
// import CustomButton from '../Forms/CustomButton/CustomButton';
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    where,
    query,
    getDocs
} from 'firebase/firestore';
import "../firebase";

const auth = getAuth();
const firestore = getFirestore();
// Listen for authentication state to change.


// function signIn(email, password) {

//     signInWithEmailAndPassword(auth, email, password).catch(error => {
//         console.error(error)
//     });
// }


export default function login({ }) {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // onAuthStateChanged(auth, async user => {
    //     if (user != null) {
    //         console.log('We are authenticated now!');
    //         const q = query(collection(firestore, "users"), where("email", "==", user.email))
    //         const snapShot = await getDocs(q)
    //         console.log(snapShot)
    //         if (snapShot.size !== 1) {
    //             console.error("Unable to properly retrieve user")
    //             return
    //         }
    //         console.log(snapShot.docs[0])
    //         const userDoc = snapShot.docs[0]
    //         navigation.navigate("Welcome")
    //     }
    // });

    return (
        <>
        <form action="signup.html" method="post" id="signup">
	        <h1>Login</h1>
	    <div className="field">
		    <label htmlFor="email">Email:</label>
		    <input type="text" id="email" name="email" placeholder="Enter your email address" />
		    <small></small>
	    </div>
	    <div className="field">
		    <label htmlFor="password">Password:</label>
		    <input type="text" id="password" name="password" placeholder="Enter your password" />
		    <small></small>
	    </div>
	    <button type="submit">Submit</button>
        </form>
        </>
    );
}

