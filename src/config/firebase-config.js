import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const favColectionRef = collection(db, 'favourites');

const analytics = getAnalytics(app);