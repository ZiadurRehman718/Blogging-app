import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDfP-eyIaO523vqjPh4kog4nusLMpuOJlA",
    authDomain: "blogging-app-8015b.firebaseapp.com",
    projectId: "blogging-app-8015b",
    storageBucket: "blogging-app-8015b.appspot.com",
    messagingSenderId: "618218968",
    appId: "1:618218968:web:818cb0770e4d1c243d9ead",
    measurementId: "G-Y2LVZRP0D4"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app);