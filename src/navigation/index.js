import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack />
            {/* <AppStack /> */}
        </NavigationContainer>
    );
}