import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native'
// import { getAuth, signOut } from "firebase/auth";
import blogPic from '../../assets/facebookLogo.png'
import { headerColor, vh, vw } from '../../constants'
import firebase from 'firebase'
import { TextInputs, ImagePickers } from "../../components";


const Profile = ({ navigation }) => {
    // const auth = getAuth()
    const [userDetails, setuserDetails] = useState({})
    const [image, setImageUrl] = useState("")


    const [inputs, setInputs] = useState({
        name: "",
        image: "",
        email: "",
        image: ""
    })

    const onChangeHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const logoutUser = () => {
        firebase.auth().signOut()
    }

    useEffect(() => {
        getUserDetils()
    }, [])


    const getUserDetils = () => {

        let id = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${id}`)
            .on("value", snapshot => {
                // console.log("snapshottttt",snapshot.val());
                let data = snapshot.val() ? snapshot.val() : {}
                // setuserDetails(snapshot.val())
                setInputs(data)
            })
    }

    // console.log(inputs, "UserDetailss");

    const updateProfile = () => {
        // alert("update")
        firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).update({
            ...inputs
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
            setInputs({ ...inputs, image: data.secure_url })
            // return data.secure_url
        }).catch(err => console.log(err))
    }

    // console.log(inputs, "UNNNNNNNNNNNNNNNnn");


    return (
        <>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={Styles.container} >
                <View style={{ marginTop: 20, flex: 0.25 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 30 }}>
                            Profile
                        </Text>
                        <TouchableOpacity
                            onPress={logoutUser}
                            style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: "white" }}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ImagePickers type="profile" picImage={picImage} val={inputs.image} width={100} height={100} borderRadius={100} title="Update Profile" />

                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 0.55 }}>
                    <View style={{ backgroundColor: "black", width: vw * 0.9, alignItems: "center", borderRadius: 10, justifyContent: "center", flex: 0.30 }}>

                        <TextInputs
                            color="white"
                            placeholder="Name"
                            value={inputs?.name}
                            onChangeText={(text) => onChangeHandler("name", text)}
                            fontSize={18}
                            marginTop={vh * 0.02}
                        />
                    </View>
                    <View style={{ backgroundColor: "black", flex: 0.30, width: vw * 0.9, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: vh * 0.02 }}>
                        <Text style={{ color: "white", fontSize: 18 }}>
                            {inputs?.email}
                            {/* Text */}
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", backgroundColor: headerColor, padding: 7, width: vw * 0.3, borderRadius: 3 }}
                        onPress={() => navigation.navigate("MyBlog")}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}> My blogs</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
                    <Button onPress={updateProfile} title='Update Profile' color={headerColor} />
                </View>
            </ScrollView>




        </>

    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Profile