import React, { useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native"
import { Button, TextInputs } from "../../components";
import facebookLogo from '../../assets/facebookLogo.png'
import AppStack from "../../navigation/AppStack";
import AuthStack from "../../navigation/AuthStack";
import { loginUser, loginWithFacebook } from "../../services/Firebase";
import { EvilIcons } from '@expo/vector-icons';
import { vh } from "../../constants";
const Login = ({ navigation }) => {

    const [loader, setLoader] = useState()

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

    const signinUser = async () => {
        await loginUser(inputs.userName, inputs.password)
    }
    const loginUserWithFb = async () => {
        await loginWithFacebook()
    }
    return (

        <View style={Style.container}>
            <View style={{ flex: 0.12, alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>Welcome Back</Text>
                <Text style={{ fontSize: 15, marginTop: vh * 0.01 }}>Please Sign In to Continue</Text>
            </View>
            <View style={{ flex: 0.22 }}>
                <TextInputs
                    placeholder="Email"
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
                    <Button onPress={signinUser} name="Sign in" color="black" />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button onPress={loginUserWithFb} pic={<EvilIcons name="sc-facebook" size={26} color="white" />} name="Continue with Facebook" color="#3b5998" />
                </View>
                <Text onPress={() => navigation.navigate("register")} style={{ textDecorationLine: "underline", textAlign: "center", marginTop: 20 }}>Don't Have an account ?</Text>
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
