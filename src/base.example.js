import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "UR PROJECT ID",
    storageBucket: "",
    messagingSenderId: "UR MESSAGING SENDER ID"
  })

const db = database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = app.auth()

export default Rebase.createClass(db)