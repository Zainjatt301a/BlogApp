import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native"
import { Button, TextInputs, ImagePickers } from "../../components";
import facebookLogo from '../../assets/facebookLogo.png'
// import { registerUser, uploadImageToStorage } from "../../services/Firebase";
import { vh } from "../../constants";
import firebase from 'firebase';

const Register = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    // console.log(inputs.name, inputs.email, inputs.password, "States");

    const onChangeHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const signupUser = () => {
        // const temp = await registerUser(inputs.name, inputs.email, inputs.password)
        // await uploadImage()
        firebase.auth().createUserWithEmailAndPassword(inputs.email, inputs.password)
            .then(response => {
                let id = firebase.auth().currentUser.uid
                firebase.database().ref(`users/${id}`)
                    .set({
                        name: inputs.name,
                        email: inputs.email,
                        isActive: true
                    })
                    .then(res => {
                        console.log("Responseeee", res);
                    })
                alert("Succesful")
                console.log("Responseeee", response);
            })
            .catch(err => {
                alert(err.message)
                console.log("ERRRRROR", err);
            })
    }

    const uploadImage = async (image) => {
        console.log(image, "Image");
        const urls = await uploadImageToStorage(image)
        console.log(urls, "Urls");
    }
    return (

        <View style={Style.container}>
            <View style={{ flex: 0.45, alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>Welcome to Blog App</Text>
                <Text style={{ fontSize: 20, marginTop: vh * 0.01, fontWeight: "300" }}>Please Register</Text>

                <ImagePickers uploadImage={uploadImage} width={100} height={100} borderRadius={100} title="Upload Profile" />

            </View>
            <View style={{ flex: 0.35 }}>
                <TextInputs
                    placeholder="Name"
                    value={inputs.name}
                    onChangeText={(text) => onChangeHandler("name", text)}
                />
                <TextInputs
                    placeholder="Email"
                    value={inputs.email}
                    onChangeText={(text) => onChangeHandler("email", text)}
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
                    <Button onPress={signupUser} name="Sign Up" color="black" />
                </View>

                <Text onPress={() => navigation.navigate("login")} style={{ textDecorationLine: "underline", textAlign: "center", marginTop: vh * 0.03 }}>Already have an account ? Login</Text>
            </View>
        </View >
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
})
export default Register
