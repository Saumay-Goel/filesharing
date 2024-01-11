import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCN4d_C-O6NXXr7SpcdDu3kDWqkSBtN3lM",
    authDomain: "test-proj-17b15.firebaseapp.com",
    projectId: "test-proj-17b15",
    storageBucket: "test-proj-17b15.appspot.com",
    messagingSenderId: "1004829558220",
    appId: "1:1004829558220:web:30f734b9ba0a453ab8c969"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

let userInp = document.getElementById("sign_up_username");
let emailInp = document.getElementById("sign_up_email");
let passInp = document.getElementById("sign_up_password");
let sign_upInp = document.getElementById('sign_up');

let register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailInp.value, passInp.value)
    .then(()=>{
        alert('account created');
    })
    .catch(()=>{
        alert("error");
    })
}
sign_upInp.addEventListener("submit",register);