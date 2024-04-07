import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuYqNHlQlKXIAqLbQq8G6aCM7nmxqGicw",
  authDomain: "miniblog-63c55.firebaseapp.com",
  projectId: "miniblog-63c55",
  storageBucket: "miniblog-63c55.appspot.com",
  messagingSenderId: "42063807139",
  appId: "1:42063807139:web:81602a3bddc9e1c98a3516",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };