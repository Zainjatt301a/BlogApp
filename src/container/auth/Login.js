import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native"
import { Button, TextInputs } from "../../components";
import facebookLogo from '../../assets/facebookLogo.png'
import AppStack from "../../navigation/AppStack";
import AuthStack from "../../navigation/AuthStack";
import { loginUser } from "../../services/Firebase";
import { EvilIcons } from '@expo/vector-icons';
import { vh } from "../../constants";
import * as Facebook from 'expo-facebook';
import { FacebookAuthProvider, signInWithCredential } from "firebase/auth"
import firebase from "firebase";
import axios from "axios";

const Login = ({ navigation }) => {

    const [loginResult, setLoginResult] = useState({})

    const Provider = FacebookAuthProvider
    const facebookLogIn = async () => {

    }

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
        // await loginUser(inputs.userName, inputs.password)
        firebase.auth().signInWithEmailAndPassword(inputs.userName, inputs.password)
            .then(response => {
                // setLoading(false)
                console.log("Login Responseeee", response);
            })
            .catch(error => {
                // setLoading(false)
                console.log("ERRRRROR", error);
            })
    }

    // const pushLoginData = () => {
    //     let id = loginResult.data.id
    //     firebase.database().ref(`users/${id}`)
    //         .set({
    //             name: loginResult.data.name,
    //             email: loginResult.data.email,
    //             // image: res.data.data.url,
    //             isActive: true,
    //         })
    // }

    let AppId = "652483592482813"
    let permissions = ['public_profile', 'email']


    const loginUserWithFb = async () => {
        // Facebook.logOutAsync()
        try {
            await Facebook.initializeAsync({
                appId: AppId
            });

            let result = await Facebook.logInWithReadPermissionsAsync({ permissions })
            const res = await axios.get('https://graph.facebook.com/v2.5/me?fields=picture.width(720).height(720),email,name,friends&access_token=' + result.token)
                .then(res => {
                    // setLoginResult(res.data)
                    console.log("FAcebook success", res.data);
                    // console.log(id, "IDDDDDD");
                    // let tempId = []
                    // let id = firebase.auth().currentUser?.uid
                    id = res.data.id
                    // tempId.push(id, res.data.id)
                    // console.log(id, "Temp id");
                    firebase.database().ref(`users/${id}`)
                        .set({
                            name: res.data.name,
                            email: res.data.email,
                            image: res.data.picture.data.url,
                            isActive: true,
                        }).then((res) => {
                            console.log("user record success");

                            // console.log(res, "RSSPONSEEEEEEE");
                        }).catch((err) => {
                            // console.log(err, "ERRRRRRRRRRR");
                        })
                    // console.log(res.data, "RESSSS")

                })
                .catch(err => {
                    console.log(err, "ERR");
                })
            // console.log(result, "Result");

            // await res.json().name

            // console.log(res, "Res");
            let response = firebase.auth.FacebookAuthProvider.credential(result.token)

            // console.log(response, "Ressssssssss");
            try {

                const result = firebase.auth().signInWithCredential(response)
                // console.log(result, "resultFirebase");
                return result


            } catch (error) {
                console.log(error, "ERRRRRRRRRRRRRRR");
            }

            // console.log(result, response, "RRRRRRRRRRRRRRRRRR");
            //    .then(res => {
            //         if (res.type == "success") {
            //             console.log(res.token, "TTT");
            //             const credential = FacebookAuthProvider.credential(res.token)
            //             console.log(credential, "credentialcredentialcredential");
            //             return signInWithCredential(credential).then(res => {
            //                 console.log(res, "RRRS_CCC");
            //             })
            //                 .catch(err => {
            //                     console.log(err, "ER_CRRRRRRR");
            //                 })
            //         }
            //     })

        }
        catch (err) {
            console.log(err, "errrr");
        }
    }

    // console.log(loginResult, "Login Result");


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
