// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBWButbUTrLqjBgrTruvf24uVeyq1x8PLQ",
	authDomain: "nealgoldmandesign.firebaseapp.com",
	projectId: "nealgoldmandesign",
	storageBucket: "nealgoldmandesign.appspot.com",
	messagingSenderId: "146402086942",
	appId: "1:146402086942:web:308dca69b6ba5606081e0f",
	measurementId: "G-4LFWZZ9X3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
