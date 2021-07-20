import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


  const config = {
    apiKey: "AIzaSyDPBqL8jCIgvqeXDM7SF_847oH6GZqc3M0",
    authDomain: "tutorial-react-2af1c.firebaseapp.com",
    projectId: "tutorial-react-2af1c",
    storageBucket: "tutorial-react-2af1c.appspot.com",
    messagingSenderId: "1036928101221",
    appId: "1:1036928101221:web:fe672f48edf2212b7bcf8c",
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  // createProfilrDocument
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // reference doc in collection
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get(); 

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userRef;

  };

  //providers
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //llamada a google con una venta aparte
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWhithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

