import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import { Button, TextInputs } from "../../components";
import facebookLogo from '../../assets/facebookLogo.png'
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


    return (

        <View style={Style.container}>
            <Text style={{ fontSize: 30, marginTop: 30 }}>Sign In</Text>
            <View>
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
            <View style={{ marginTop: 20 }}>
                <Button onPress={() => alert("Login")} name="Sign in" color="black" />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button onPress={() => alert("Login")} pic={facebookLogo} name="Continue with Facebook" color="#3b5998" />
            </View>
            <Text onPress={() => navigation.navigate("register")} style={{ textDecorationLine: "underline", textAlign: "center", marginTop: 20 }}>Register</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Login
