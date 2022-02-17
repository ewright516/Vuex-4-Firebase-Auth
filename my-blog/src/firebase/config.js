import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT1OwclXLfuSgSzEs3bjzg16xEDBCQD84",
  authDomain: "vuex-firebase-tutorial-5009d.firebaseapp.com",
  projectId: "vuex-firebase-tutorial-5009d",
  storageBucket: "vuex-firebase-tutorial-5009d.appspot.com",
  messagingSenderId: "978057332570",
  appId: "1:978057332570:web:4907bfac265f932e4b5563",
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };
