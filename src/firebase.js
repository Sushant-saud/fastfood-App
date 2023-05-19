import firbase from './firebase'
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDExEvXmUFcQH76j17ILPmS8Pe2nlaUi7E",
  authDomain: "foodapp-fe35b.firebaseapp.com",
  projectId: "foodapp-fe35b",
  storageBucket: "foodapp-fe35b.appspot.com",
  messagingSenderId: "108562482499",
  appId: "1:108562482499:web:0173d78ae4b3d2f8029bf6",
  measurementId: "G-NNSSSQ65RZ"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {auth,app}; 
