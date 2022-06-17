import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAWe8hXyBijJ6_4fmYbwqFxDepUG8JwKBY',
  authDomain: 'club-ecommerce-2-d1f9f.firebaseapp.com',
  projectId: 'club-ecommerce-2-d1f9f',
  storageBucket: 'club-ecommerce-2-d1f9f.appspot.com',
  messagingSenderId: '141215725125',
  appId: '1:141215725125:web:ad6a9ab67342688d24552c'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
