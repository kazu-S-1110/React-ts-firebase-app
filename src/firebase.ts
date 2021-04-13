import firebase from "firebase/app"
import "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID, 
  appId:process.env.REACT_APP_FIREBASE_APPID
})

export const db = firebase.firestore()
export const auth = firebase.auth()