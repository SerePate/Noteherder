import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "YOUR API KEY",
    authDomain: "notehearder.firebaseapp.com",
    databaseURL: "https://notehearder.firebaseio.com",
    projectId: "notehearder",
    storageBucket: "",
    messagingSenderId: "788592395302"
  })

const db = database(app)

export default Rebase.createClass(db)