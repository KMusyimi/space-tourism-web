// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "space-tourism-web-da1d7.firebaseapp.com",
    projectId: "space-tourism-web-da1d7",
    storageBucket: "space-tourism-web-da1d7.firebasestorage.app",
    messagingSenderId: "968837970436",
    appId: "1:968837970436:web:7659abcf55797c4f7c1351",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const destCollectionRef = collection(db, 'destinations');
const crewCollectionRef = collection(db, 'crews');
const techCollectionRef = collection(db, 'technology');


export async function getDestinationIDs() {
    const querySnapshot = await getDocs(destCollectionRef)
    return querySnapshot.docs.map(doc => ({id: doc.id, name: doc.data().name}));
}

export async function getDestination(id) {
    const moonId = 'LBMCQGUBtI5P5nVa2ODT';
    id = id ? id : moonId;
    const docRef = doc(destCollectionRef, id);
    const querySnapshot = await getDoc(docRef);
    return {...querySnapshot.data(), id: querySnapshot.id};
}

export async function getCrew(id) {
    id = id ? id : 'vjybTAXpEfLYNP9ZFfTs';
    const docRef = doc(crewCollectionRef, id);
    const querySnapshot = await getDoc(docRef);
    return {...querySnapshot.data(), id: querySnapshot.id};
}

export async function getTechnology(id) {
    id = id ? id : '20KYNpIp1nMWOGpabCxT';
    const docRef = doc(techCollectionRef, id);
    const techSnapshot = await getDoc(docRef);
    return {...techSnapshot.data(), id: techSnapshot.id};
}