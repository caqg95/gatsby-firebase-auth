import firebase from "firebase/app"
import "firebase/auth"
 var firebaseConfig={
     apiKey: "AIzaSyCjvdX7xKlKT3hgwU-CZjXvJWi-vtYFzxw",
     authDomain: "desarrollo-30663.firebaseapp.com",
     databaseURL: "https://desarrollo-30663.firebaseio.com",
     projectId: "desarrollo-30663",
    storageBucket: "desarrollo-30663.appspot.com",
    messagingSenderId: "887829204309",
    appId: "1:887829204309:web:6517c4a21681b522fab3dc",
 };
//  const app=firebase.initializeApp({
//      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//      appId: process.env.REACT_APP_FIREBASE_APP_ID,
//  });
const app=firebase.initializeApp(firebaseConfig);
export const auth=app.auth();
export default app