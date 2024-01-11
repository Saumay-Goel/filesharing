import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, uploadBytesResumable, ref , getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { amt } from "../scripts/animation.js"

const firebaseConfig = {
apiKey: "AIzaSyCN4d_C-O6NXXr7SpcdDu3kDWqkSBtN3lM",
authDomain: "test-proj-17b15.firebaseapp.com",
databaseURL: "https://test-proj-17b15-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "test-proj-17b15",
storageBucket: "test-proj-17b15.appspot.com",
messagingSenderId: "1004829558220",
appId: "1:1004829558220:web:30f734b9ba0a453ab8c969"
};
const submit_btn = document.getElementById("submit_btn");
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const copy = document.querySelector('.copy');
const url_box = document.querySelector('.url_box');

const input_field = document.getElementById("file");
const form_btn = document.getElementById("submit_btn");

let upload_file = (e) =>{
    e.preventDefault()
    const file = input_field.files[0];
    if (file){
        const storageRef = ref(storage,"uploads/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        const progress_bar = document.querySelector('.progress_bar');

        uploadTask.on('state_changed',(snapshot)=>{
            const progress = Math.trunc((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            submit_btn.innerHTML = "";
            submit_btn.innerHTML = `${progress}%`;
        },(error)=>{
            console.error('error during upload',error)
        },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
                submit_btn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                url_box.setAttribute('value',downloadURL)
            })
        })
    }else{
        alert("file not found!!")
    }
}

let copyText = (e) =>{
    e.preventDefault()
    url_box.select();
    url_box.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(url_box.value)
    copy.innerHTML=''
    copy.innerHTML='<i class="fa-solid fa-check"></i>'
}
copy.addEventListener('click',copyText)
form_btn.addEventListener('click',upload_file)
submit_btn.addEventListener("click",amt)