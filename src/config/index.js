// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASGhrzhbiJjx0anndtCsnLLO_6XYMPOAE",
  authDomain: "aime-sulut.firebaseapp.com",
  projectId: "aime-sulut",
  storageBucket: "aime-sulut.appspot.com",
  messagingSenderId: "17458371709",
  appId: "1:17458371709:web:5deb8395c2b7f7f2586514",
  measurementId: "G-SJZ42P44GN",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase;

const auth = getAuth(firebase);
// console.log(auth);
setPersistence(auth, "local").catch((error) => {
  console.log("setPresistence error: ", error.message);
});

// Sign Up function
export const createUser = (fullName, email, password, navigation) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: fullName,
        });
        sendEmailVerification(userCredential.user).then(() =>
          navigation.navigate("Verify", { email: email })
        );

        // console.log(userCredential.user.displayName);
        resolve(userCredential.user);
        console.log("success");
      })
      .catch((error) => {
        reject(error);
        console.log(error.code);
        console.log("error");
      });
  });
};

// Sign In function
export const signIn = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (!userCredential.user.emailVerified) {
          alert("Please verify your email first");
          signOut()
            .then(() => console.log("sign out"))
            .catch((error) => console.log(error));
          return;
        }
        resolve(userCredential.user);
        console.log("success");
      })
      .catch((error) => {
        reject(error);
        console.log("error");
      });
  });
};

// Reset password function
export const resetPass = (email) => {
  sendPasswordResetEmail(auth, email).then(() => {
    console.log("email sent");
  });
};

// get current user
export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });

// sign out function
export const signOut = async (navigation) => {
  await auth
    .signOut()
    .then(() => navigation.replace("SignIn"))
    .catch((error) => console.log("sign out function: ", error));
};
