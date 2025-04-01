import Firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6_KY0Gjd8h5drTEGd9e058WFau4MaU1E",
  authDomain: "projeto-mobile-luketa.firebaseapp.com",
  projectId: "projeto-mobile-luketa",
  storageBucket: "projeto-mobile-luketa.firebasestorage.app",
  messagingSenderId: "412683814386",
  appId: "1:412683814386:web:9af84b7ab01ee5b348976b"
}
if (!Firebase.apps.length){
  Firebase.initializeApp(firebaseConfig);
} else {
  Firebase.app();
}

export default Firebase;