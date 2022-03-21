// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage"
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
const db = getDatabase(app);
const storage = getStorage();

const registerUser = async (name, email, password) => {
    // console.log(email, password, name, "Register");
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        alert("Successfully Registered")
        await set(ref(db, 'users/' + user), {
            name,
            email,
            password
        });

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
        console.log("error", errorMessage, errorCode)
    }

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

async function uploadImageToStorage(file) {
    console.log(file, "File");
    try {
        const storageRef = sRef(storage, `registerImages/${file}`);
        console.log(storageRef.fullPath, "Storage Ref");
        const response = await uploadBytes(storageRef, file)

        const url = await getDownloadURL(response)
        // console.log(storageRef, "Response");

        console.log(url, "Respopnse");
        // return await getDownloadURL(response.ref)
        return url
    } catch (error) {
        console.log(error.message, "ERORRR");
    }
}

export {
    registerUser,
    loginUser,
    loginWithFacebook,
    uploadImageToStorage,
}