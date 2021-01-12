import firebaseConfig from '../../src/fbsconfig/firebaseConfig.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyACVdVscEdAywGhkiE6GHI8YWUhsGCoXGg",
//     authDomain: "fbsneal.firebaseapp.com",
//     projectId: "fbsneal",
//     storageBucket: "fbsneal.appspot.com",
//     messagingSenderId: "562345386277",
//     appId: "1:562345386277:web:504306083309b242c67acc",
//     measurementId: "G-B0H2CGGHH9"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
let db = firebase.firestore()

let docRowData ={
    name:"Jhon",
    age:28,
    profile:{
        address:"xxxx",
        phone:"0925511561"
    }
}

docRowData = {
    age:54
}
let fs_option = {merge:true}
db.collection('Users').doc('AABB').delete();
// db.collection('Users').where().get()
// .then((documentSnapshot) => {
//     console.log(documentSnapshot.data())
// })
// db.collection('Users').get()
// .then((documentSnapshot222) => {
//     //console.log(documentSnapshot222.docs)//documentSnapshot
//     //js array.forEach
//     documentSnapshot222.docs.forEach((item) => {
//         console.log("data---->", item.data())
//     })
// })



//.doc('AABB')