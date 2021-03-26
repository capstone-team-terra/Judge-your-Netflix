import firebase from "firebase/app";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA27IqXB0y-zzNo6VKGeNdzStu0pWPLodg",
//   authDomain: "roastflix-a53f3.firebaseapp.com",
//   projectId: "roastflix-a53f3",
//   storageBucket: "roastflix-a53f3.appspot.com",
//   messagingSenderId: "872835895022",
//   appId: "1:872835895022:web:b25898c242573c82246dff",
//   measurementId: "G-D9G0EZX8JJ",
// };
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};
export const app = firebase.initializeApp(firebaseConfig);
