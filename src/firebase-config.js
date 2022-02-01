import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBCrbP80F8DCsi3UQf5255abf9Rz-Sgm9w",
  authDomain: "enduring-trees-322406.firebaseapp.com",
  projectId: "enduring-trees-322406",
  storageBucket: "enduring-trees-322406.appspot.com",
  messagingSenderId: "659155257552",
  appId: "1:659155257552:web:77f5171f8cfba367f0f6d5",
  measurementId: "G-4GVETETP4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);