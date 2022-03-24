import React, { useEffect } from 'react'
import { View } from 'react-native'
import Navigation from './src/navigation'
// import { initializeApp, getApps, getApp } from 'firebase/app'
import firebase from 'firebase'
const App = () => {

  useEffect(() => {
    initialApp()

  }, [])
  // const apps = getApps()
  // const app = getApp()
  const initialApp = () => {

    const firebaseConfig = {
      apiKey: "AIzaSyD038TcAjczfWdOBI5vLG2mFhMD1nmv-00",
      authDomain: "blog-app-f1b0e.firebaseapp.com",
      projectId: "blog-app-f1b0e",
      storageBucket: "blog-app-f1b0e.appspot.com",
      messagingSenderId: "336881234156",
      appId: "1:336881234156:web:c24590fcbe01f69fe4f5c9"
    };

    // Initialize Firebase
    // getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
    // if (!apps.length) {
    //   initializeApp(firebaseConfig);
    // } else {
    //   app(); // if already initialized, use that one
    // }
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  )
}

export default App