import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { ActivityIndicator, Image } from 'react-native';
import { headerColor, vh, vw } from '../constants';
import { View } from 'react-native';
import firebase from 'firebase';

export default function Navigation() {
    const [component, setComponent] =
        useState(
            <ActivityIndicator color={headerColor} size={'small'}
                style={{ flex: 1 }}
                animating={true}
            />
            // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            //     <Image source={{ uri: "https://stackideas.cachefly.net/images/apps/2429/logo.png" }} style={{ width: vw * 1, height: vh * 0.57 }} />
            // </View>
        )

    // const auth = getAuth();
    useEffect(() => {
        setTimeout(() => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    // const uid = user.uid;
                    setComponent(<AppStack />)
                } else {
                    setComponent(<AuthStack />)
                }
            });
        }, 5000)
    }, [])



    return (
        <NavigationContainer>
            {/* <AuthStack /> */}
            {/* <AppStack /> */}
            {component}
        </NavigationContainer>
    );
}