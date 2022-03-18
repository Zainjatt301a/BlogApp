import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { ActivityIndicator } from 'react-native';

export default function Navigation() {
    const [component, setComponent] =
        useState(
            <ActivityIndicator color="blue" size={'large'}
                style={{ flex: 1 }}
                animating={true}
            />
        )

    const auth = getAuth();
    useEffect(() => {
        setTimeout(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
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