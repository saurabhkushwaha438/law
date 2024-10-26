// firebaseConfig.js
import admin from 'firebase-admin';
import serviceAccount from '../legaleyepartners-firebase-adminsdk-hp0vp-bacfbc85f7.json' assert {type:'json'}; // Adjusted path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "legaleyepartners.appspot.com", // Replace with your Firebase Storage bucket name
});

const bucket = admin.storage().bucket();
export default bucket;
