import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'
firebase.initializeApp({
  apiKey: "AIzaSyB-5u7uWtW9w6pRwJDTRa_eukLrm_sSzgs",
  authDomain: "resumebuilder-c983f.firebaseapp.com",
  projectId: "resumebuilder-c983f",
  storageBucket: "resumebuilder-c983f.appspot.com",
  messagingSenderId: "466721213747",
  appId: "1:466721213747:web:f9a7c91b6f539a97e28246",
  measurementId: "G-FL2FQFCSVR"
})

export const auth = firebase.auth()
const firestore = firebase.firestore();
export const database ={
  users:firestore.collection('users'),
  posts:firestore.collection('posts'),
  comments:firestore.collection('comments'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc:doc=>{
    return {id:doc.id,...doc.data()}
  }
}
export const storage = firebase.storage();
export default firebase
