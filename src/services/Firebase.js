// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD038TcAjczfWdOBI5vLG2mFhMD1nmv-00",
    authDomain: "blog-app-f1b0e.firebaseapp.com",
    projectId: "blog-app-f1b0e",
    storageBucket: "blog-app-f1b0e.appspot.com",
    messagingSenderId: "336881234156",
    appId: "1:336881234156:web:c24590fcbe01f69fe4f5c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new FacebookAuthProvider();

const registerUser = (email, password, name) => {
    console.log(email, password, name, "Register");
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user.uid
            alert("Successfully Registered")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
            console.log("error", errorMessage, errorCode)
        })


}

const loginUser = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        alert("Success")
    } catch (error) {
        alert(error.message)
    }

}

const loginWithFacebook = async () => {

    try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        alert(errorMessage)

        // ...
    }

    // .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.email;
    //     // The AuthCredential type that was used.
    //     const credential = FacebookAuthProvider.credentialFromError(error);

    //     // ...
    // });
}

export {
    registerUser,
    loginUser,
    loginWithFacebook
}