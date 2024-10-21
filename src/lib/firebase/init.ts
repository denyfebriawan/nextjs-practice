// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCwp1-qkKDqkiSe4IpNB0j-3bdpP4PgMCo",
  authDomain: "my-next-app-1-ff9fc.firebaseapp.com",
  projectId: "my-next-app-1-ff9fc",
  storageBucket: "my-next-app-1-ff9fc.appspot.com",
  messagingSenderId: "98229210133",
  appId: "1:98229210133:web:5ead234fa309c9c794921c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
