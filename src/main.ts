import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDdceS85F3PiSXYKIvSFCi5SNfp55U4FO8',
  authDomain: 'homepage-1653b.firebaseapp.com',
  projectId: 'homepage-1653b',
  storageBucket: 'homepage-1653b.appspot.com',
  messagingSenderId: '509560076636',
  appId: '1:509560076636:web:9ca517056ec3ff2a98e999',
  measurementId: 'G-N7L8QPEH5S',
  databaseURL: 'https://homepage-1653b-default-rtdb.firebaseio.com/',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

createApp(App).use(router).mount('#app')
