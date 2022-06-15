import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCNRAa8p7pYBz0aFfMS57zbvS92cVC4m2k',
  authDomain: 'club-ecommerce-5448b.firebaseapp.com',
  projectId: 'club-ecommerce-5448b',
  storageBucket: 'club-ecommerce-5448b.appspot.com',
  messagingSenderId: '1064425705177',
  appId: '1:1064425705177:web:99705e621548cc50e438c8'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
