import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDLQwfI-IcyHYrbLh_Q_PXUcub2uODltmQ",
  authDomain: "weixin-b63e2.firebaseapp.com",
  databaseURL: "https://weixin-b63e2.firebaseio.com",
  projectId: "weixin-b63e2",
  storageBucket: "weixin-b63e2.appspot.com",
  messagingSenderId: "551414443841",
  appId: "1:551414443841:web:b879fd030f668ebb"
}

firebase.initializeApp(config)

// Firebase Utils
const database = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// Firebase Collections
const postsCollection = database.collection('posts')

export {
  database,
  auth,
  currentUser,
  postsCollection
}
