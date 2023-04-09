import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChf-zcnzpgz3bwvt0ZtyPJsDBmHIGhh4s",
  authDomain: "silicon-ad63a.firebaseapp.com",
  projectId: "silicon-ad63a",
  storageBucket: "silicon-ad63a.appspot.com",
  messagingSenderId: "382579370987",
  appId: "1:382579370987:web:6c0ce994522d6cc83187ae",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export { app, db, auth, storage };
