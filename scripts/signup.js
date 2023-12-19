import { createUserWithEmailAndPassword , updateProfile} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { auth , storage } from "./config.js";

const form = document.querySelector('form');
const Firstname = document.querySelector('#F-name');
const lastname = document.querySelector('#L-name');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const Rpassword = document.querySelector('#R-pass');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fullname = Firstname.value + " " + lastname.value;
    if (password.value !== Rpassword.value) {
        Swal.fire({
            icon: "warning",
            title: "Passwords are not same",
            showConfirmButton: false,
            timer: 1500,
          });
        return;
      }
      const file = fileimg.files[0];
  if (!file) {
    Swal.fire({
      icon: "error",
      title: "Add a Picture",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }
  const storageRef = ref(storage, email.value);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  console.log(url);
    createUserWithEmailAndPassword( auth , email.value, password.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            Swal.fire({
                icon: "success",
                title: "Signed In as " + Firstname.value + " " + lastname.value,
                showConfirmButton: false,
                timer: 1500,
              });
        await updateProfile(auth.currentUser, {
                displayName: fullname,
                photoURL: url,
            });
            console.log("User created");
            alert("User created");
            
            window.location = "../apps/dash.html";
        })

        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    })
        
    