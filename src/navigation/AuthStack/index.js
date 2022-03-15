import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../../container';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthStack