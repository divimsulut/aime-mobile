// Import the functions you need from the SDKs you need
import { CommonActions } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  updateEmail,
  signOut,
  PhoneAuthProvider,
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
console.log(auth);
setPersistence(auth, "local").catch((error) => {
  console.log("setPresistence error: ", error.message);
});

// Google Sign In
export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  console.log(provider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        resolve(user);
        console.log(user);
        console.log("success");
      })
      .catch((error) => {
        console.log("error yuhu");
        reject(error);
      });
  });
};

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
          resolve("email not verified");
          sendEmailVerification(userCredential.user)
            .then(() => console.log("email sent"))
            .catch((err) => console.log(err));
          signOut(auth)
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
export const signOutUser = async (navigation) => {
  await auth
    .signOut()
    .then(() =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        })
      )
    )
    .catch((error) => console.log("sign out function: ", error));
};

// edit name
export const handleEditName = async (name) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
  })
    .then(() => console.log("name updated"))
    .catch((error) => console.log(error));
};

// edit email
export const handleEditEmail = async (email) => {
  await updateEmail(auth.currentUser, email)
    .then(() => console.log("email updated"))
    .catch((error) => console.log(error));
};

// edit phoneNumber
export const handleEditPhoneNum = async (num) => {
  await updateProfile(auth.currentUser, {
    phoneNumber: num,
  })
    .then(() => console.log("phone number updated"))
    .catch((error) => console.log(error));
};

// send verification code
export const sendVCode = async (phone) => {
  console.log("sent: ", phone);
  // const provider = new PhoneAuthProvider(auth);
  const verificationId = await auth.verifyPhoneNumber(phone);
  console.log("yuhu: ", verificationId);
};
