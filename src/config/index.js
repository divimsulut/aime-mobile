// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
  signOut,
  initializeAuth,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { userPatchAPI } from "../api";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrigAza54IO6NxMKJ1qPa3sInB8xkGkX0",
  authDomain: "aime-390301.firebaseapp.com",
  projectId: "aime-390301",
  storageBucket: "aime-390301.appspot.com",
  messagingSenderId: "65604286298",
  appId: "1:65604286298:web:ad9ffd380c5c1d86fc2563",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase;

export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(AsyncStorage),
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
        console.log("ERR @CREATE_USER_FB: ", error);
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
            .catch((err) => console.log("ERR @SEND_MAIL_VER_FB: ", err));
          signOut(auth)
            .then(() => console.log("sign out"))
            .catch((error) => console.log("ERR @SIGNOUT_FB", error));
          return;
        }
        resolve(userCredential.user);
        console.log("success");
      })
      .catch((error) => {
        reject(error);
        console.log("ERR @SIGNIN_/W_EMAILPASS: ", error);
      });
  });
};

// Reset password function
export const resetPass = async (email) => {
  await new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        resolve("email sent");
        console.log("email sent");
      })
      .catch((error) => {
        console.log("ERR @SEND_RESET_PASS_/V_EMAIL: ", error);
        reject(error.code);
      });
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
export const signOutUser = async () => {
  await auth
    .signOut()
    .catch((error) => console.log("ERR @SIGNOUT_FB: ", error));
};

// edit profile picture
export const handleEditProfilePic = async (uri) => {
  console.log(uri);
  await updateProfile(auth.currentUser, {
    photoURL: uri,
  })
    .then(() => console.log("profile pic updated"))
    .catch((error) => console.log("ERR @UPDATE_PROFILE_PICT_FB: ", error));
};

// edit name
export const handleEditName = async (name) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
  })
    .then(() => console.log("name updated"))
    .catch((error) => console.log("ERR @UPDATE_NAME_FB: ", error));
};

// edit email
export const handleEditEmail = async (email) => {
  await updateEmail(auth.currentUser, email)
    .then(() => console.log("email updated"))
    .catch((error) => console.log("ERR @UPDATE_EMAIL_FB: ", error));
};

// handle edit phone number
export const handleEditPhoneNum = (userId, phone) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .patch(userPatchAPI(userId), {
        uuid: userId,
        phoneNum: phone,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("ERR @UPDATE_PHONE_NUM", err);
      });
  });
};

// storage
export const storage = getStorage(firebase);
