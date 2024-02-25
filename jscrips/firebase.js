const firebaseConfig = {
  apiKey: "AIzaSyDJSrCbXmt_59_Jdor9Qk7W5pLHsoCShz4",
  authDomain: "lapregister-4a9e5.firebaseapp.com",
  projectId: "lapregister-4a9e5",
  storageBucket: "lapregister-4a9e5.appspot.com",
  messagingSenderId: "121300405574",
  appId: "1:121300405574:web:6af60e7b36ec9a4d072947",
  measurementId: "G-9PFPL62QPX"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
