import React, { useEffect } from 'react'
import { View } from 'react-native'
import Navigation from './src/navigation'
import { initializeApp, getApps, getApp } from 'firebase/app'
const App = () => {

  // useEffect(() => {
  //   initialApp()

  // }, [])

  // const initialApp = async () => {

  //   const firebaseConfig = {
  //     apiKey: "AIzaSyD038TcAjczfWdOBI5vLG2mFhMD1nmv-00",
  //     authDomain: "blog-app-f1b0e.firebaseapp.com",
  //     projectId: "blog-app-f1b0e",
  //     storageBucket: "blog-app-f1b0e.appspot.com",
  //     messagingSenderId: "336881234156",
  //     appId: "1:336881234156:web:c24590fcbe01f69fe4f5c9"
  //   };

  //   // Initialize Firebase
  //   getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
  // }

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  )
}

export default App