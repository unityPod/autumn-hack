import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, useWindowDimensions } from 'react-native';
import logo from '../src/assets/logo.png';
import { useState } from "react";
import Input from '../component/Forms/Inputs/Input';
import CustomButton from '../component/Forms/CustomButton/CustomButton';
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


function signIn(email, password) {

    signInWithEmailAndPassword(auth, email, password).catch(error => {
        console.error(error)
    });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    logo: {
        width: '100%',
        maxHeight: '40%',
        paddingBottom: 20
    },
    text: {
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "bold",
        padding: 20
    }
});


export default function login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    onAuthStateChanged(auth, async user => {
        if (user != null) {
            console.log('We are authenticated now!');
            const q = query(collection(firestore, "users"), where("email", "==", user.email))
            const snapShot = await getDocs(q)
            console.log(snapShot)
            if (snapShot.size !== 1) {
                console.error("Unable to properly retrieve user")
                return
            }
            console.log(snapShot.docs[0])
            const userDoc = snapShot.docs[0]
            navigation.navigate("Welcome")
        }
    });

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.text}>Rewards App</Text>
            {/* <TextInput
                placeholder="Email"
                defaultValue={email}
                onChangeText={setEmail} />
            <TextInput
                placeholder="Password"
                defaultValue={password}
                onChangeText={setPassword}
            /> */} 
            <Input
                placeholder="Email"
                defaultValue={email}
                onChangeText={setEmail}
            />
            <Input
                placeholder="Password"
                defaultValue={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            {/* <Button title="Submit" onPress={e => signIn(email, password)} /> */}
            <CustomButton text="Sign In" onPress={e => signIn(email, password)} />
            <StatusBar style="auto" />
        </View>
    );
}

