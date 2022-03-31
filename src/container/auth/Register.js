import React, { useState } from "react";
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from "react-native"
import { Button, TextInputs, ImagePickers } from "../../components";
import facebookLogo from '../../assets/facebookLogo.png'
// import { registerUser, uploadImageToStorage } from "../../services/Firebase";
import { vh, headerColor } from "../../constants";
import firebase from 'firebase';

const Register = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [imageUrl, setImageUrl] = useState("")

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
                        isActive: true,
                        image: imageUrl
                    })
                    .then(res => {
                        console.log("Responseeee", res);
                    })
                // alert("Succesful")
                console.log("Responseeee", response);
            })
            .catch(err => {
                alert(err.message)
                console.log("ERRRRROR", err);
            })
    }

    const picImage = (images) => {
        // console.log(images, "Image");
        UploadImageToCloudinary(images)
    }

    const UploadImageToCloudinary = async (e) => {
        console.log(e, "EEEEEE");
        let apiUrl = 'https://api.cloudinary.com/v1_1/dqsji3tjw/image/upload';

        let data = {
            "file": e,
            "upload_preset": "Images",
        }

        fetch(apiUrl, {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
        }).then(async r => {
            let data = await r.json()
            console.log(data.secure_url)
            setImageUrl(data.secure_url)
            // return data.secure_url
        }).catch(err => console.log(err))
    }

    console.log(imageUrl, "Image Url");
    return (

        <ScrollView contentContainerStyle={Style.container}
            keyboardShouldPersistTaps='handled'
        >

            <View style={{ flex: 0.45, alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>Welcome to Blog App</Text>
                <Text style={{ fontSize: 20, marginTop: vh * 0.01, fontWeight: "300" }}>Please Register</Text>

                <ImagePickers type="register" value={imageUrl} picImage={picImage} width={100} height={100} borderRadius={100} title="Upload Profile" />

            </View>
            <View style={{ flex: 0.35, marginTop: vh * -0.06 }}>
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
                    <Button onPress={signupUser} name="Sign Up" color={headerColor} />
                </View>

                <Text onPress={() => navigation.navigate("login")} style={{ textDecorationLine: "underline", textAlign: "center", marginTop: vh * 0.03 }}>Already have an account ? Login</Text>
            </View>

        </ScrollView >
    )
}

const Style = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 20
    }
})
export default Register
