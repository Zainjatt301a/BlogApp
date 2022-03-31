import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { ImagePickers, TextInputs, Button, RichTextEditor } from '../../components'
import { headerColor, vh } from '../../constants'
import firebase from 'firebase'
import { launchImageLibraryAsync } from 'expo-image-picker'
// import { v4 as uuidv4 } from "uuid"
import axios from 'axios'
const CreateBlog = ({ navigation: { navigate } }) => {
    const [inputs, setInputs] = useState({
        title: "",
        description: ""
    })
    const [userData, setUserData] = useState({})

    useEffect(() => {
        getUserData()
    }, [])

    const onChangeHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")
    // const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState("")

    // console.log(title, description, image, "States");

    const getUserData = () => {
        let id = firebase.auth().currentUser.uid
        firebase.database().ref(`users/${id}`)
            .on("value", snapshote => {
                // console.log(snapshote.val(), Image);
                let data = snapshote.val() ? snapshote.val() : {}
                setUserData(data)

            })
    }

    const postBlog = () => {
        // navigate("Home")
        let id = firebase.auth().currentUser.uid;

        firebase.database().ref(`blogs`)
            .push({
                title: inputs.title,
                description: inputs.description,
                status: "active",
                blogId: Math.floor(100000 + Math.random() * 900000),
                createdBy: id,
                image: imageUrl,
                userData,
                date: new Date().toLocaleDateString()

            })
            .then(response => {
                setInputs({})
                setImageUrl("")
                console.log("RESPONSEEEE", response);
            })
            .catch(err => {
                console.log("errrrrrrr", err);
            })
    }
    const imagePickerGallery = (images) => {

        console.log(images, "Image");
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

    // console.log(userImage, 'userImage');

    console.log(imageUrl, "Imageurl");
    return (
        <>
            <Text style={{ fontSize: 30, marginTop: vh * 0.03 }}>
                Create Blog
            </Text>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={Styles.container}>
                <View style={{ flex: 0.35 }}>
                    <ImagePickers type="create" pic={imageUrl} picImage={imagePickerGallery} title="Upload Photo" width={300} height={100} borderRadius={10} />
                    {/* <TouchableOpacity
                        onPress={pickImage}
                    >
                        <Text>Upload Image</Text>
                    </TouchableOpacity>
                    <Image /> */}
                </View>
                <View style={{ flex: 0.20 }}>
                    <Text style={{ textAlign: "center" }}>Title</Text>
                    <TextInputs
                        value={inputs.title}
                        onChangeText={(text) => onChangeHandler("title", text)} placeholder="Write title" />
                </View>
                <View style={{ flex: 0.30 }}>
                    <Text style={{ textAlign: "center" }}>Write your blog here</Text>
                    <TextInputs
                        value={inputs.description}
                        onChangeText={(text) => onChangeHandler("description", text)}
                        placeholder="Write Something"
                        height={vh * 0.2}
                        borderWidth={1}
                    />
                    {/* <RichTextEditor /> */}
                </View>
                <View style={{ flex: 0.12 }}>
                    <Button onPress={postBlog} name="Post" color={headerColor} />
                </View>
            </ScrollView>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})

export default CreateBlog