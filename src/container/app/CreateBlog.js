import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ImagePickers, TextInputs, Button, RichTextEditor } from '../../components'
import { vh } from '../../constants'
import firebase from 'firebase'
// import { v4 as uuidv4 } from "uuid"
import axios from 'axios'
const CreateBlog = ({ navigation: { navigate } }) => {
    const [inputs, setInputs] = useState({
        title: "",
        description: ""
    })

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

    const postBlog = () => {
        // navigate("Home")
        let id = firebase.auth().currentUser.uid;

        firebase.database().ref(`blogs`)
            .push({
                title: inputs.title,
                description: inputs.description,
                status: "active",
                blogId: Math.floor(100000 + Math.random() * 900000),
                createdBy: id

            })
            .then(response => {
                console.log("RESPONSEEEE", response);
            })
            .catch(err => {
                console.log("errrrrrrr", err);
            })
    }
    // declare all characters
    const characters = 'ABCDEFH';

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    console.log(generateString(5));
    const imagePickerGallery = (images) => {
        // setImage(images)
        const source = {
            uri: images.uri,
            type: images.type,
            name: `${generateString(6)}.jpg`
        }
        console.log(source, "sourece variable");
        UploadImageToCloudinary(source)
    }

    const UploadImageToCloudinary = async (e) => {
        console.log(e, "EEEEEE");
        const data = new FormData()
        data.append('file', e)
        data.append("upload_preset", "Images")
        data.append("cloud_name", "dqsji3tjw")
        try {
            let res = await axios.post(
                "https://api.cloudinary.com/v1_1/dqsji3tjw/upload",
                data)
            // const URL=URL(response.data.secure_url)
            console.log(res, "response");
        } catch (error) {
            console.log(error, "error cloudinary");
        }
    }
    // console.log(image, "Image");
    return (
        <>
            <Text style={{ fontSize: 30, marginTop: vh * 0.03 }}>
                Create Blog
            </Text>
            <ScrollView contentContainerStyle={Styles.container}>
                <View style={{ flex: 0.35 }}>
                    <ImagePickers picImage={imagePickerGallery} title="Upload Photo" width={300} height={100} borderRadius={10} />
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
                        placeholder="Write Something" />
                    {/* <RichTextEditor /> */}
                </View>
                <View style={{ flex: 0.12 }}>
                    <Button onPress={postBlog} name="Post" color="black" />
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

export default CreateBlog