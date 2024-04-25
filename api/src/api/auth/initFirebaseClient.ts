import { initializeApp } from "firebase/app";
import FirebaseAuthClientKeys from "./firebase-client-credentials.json";

const initFirebaseClient = () => {
    initializeApp(FirebaseAuthClientKeys);
}

export {
    initFirebaseClient
}

//EJECUTAR npm install firebase SEGUIDO DE npm install PARA QUE NO HAYA PROBLEMAS