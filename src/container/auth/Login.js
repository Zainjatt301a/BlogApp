import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import { Button, TextInputs } from "../../components";
import facebookLogo from '../../assets/facebookLogo.png'
import AppStack from "../../navigation/AppStack";
import AuthStack from "../../navigation/AuthStack";
const Login = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        userName: "",
        password: ""
    })

    const onChangeHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const loginUser = () => {
        alert("Login Please")
    }

    return (

        <View style={Style.container}>
            <View style={{ flex: 0.12 }}>
                <Text style={{ fontSize: 30 }}>Sign In</Text>
            </View>
            <View style={{ flex: 0.22 }}>
                <TextInputs
                    placeholder="User Name"
                    value={inputs.userName}
                    onChangeText={(text) => onChangeHandler("userName", text)}
                />
                <TextInputs
                    placeholder="password"
                    value={inputs.password}
                    onChangeText={(text) => onChangeHandler("password", text)}
                    secureTextEntry
                />
            </View>
            <View style={{ flex: 0.33 }}>
                <View style={{ marginTop: 20 }}>
                    <Button onPress={loginUser} name="Sign in" color="black" />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button onPress={() => alert("Login")} pic={facebookLogo} name="Continue with Facebook" color="#3b5998" />
                </View>
                <Text onPress={() => navigation.navigate("register")} style={{ textDecorationLine: "underline", textAlign: "center", marginTop: 20 }}>Register</Text>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
})
export default Login
