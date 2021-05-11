import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD-bvnB-LCE-Fq0oyurCvopzw1YmosnhTU",
  authDomain: "healty-food-e046a.firebaseapp.com",
  databaseURL: "https://healty-food-e046a-default-rtdb.firebaseio.com",
  projectId: "healty-food-e046a",
  storageBucket: "healty-food-e046a.appspot.com",
  messagingSenderId: "35761237508",
  appId: "1:35761237508:web:6d2042304a7269520fcf51",
  measurementId: "G-0JSC7NBSJR",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();
