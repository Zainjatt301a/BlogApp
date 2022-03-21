import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ImagePickers, TextInputs, Button, RichTextEditor } from '../../components'
import { vh } from '../../constants'

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
    const [image, setImage] = useState()

    // console.log(title, description, image, "States");

    const postBlog = () => {
        navigate("Home")
    }
    return (
        <>
            <Text style={{ fontSize: 30, marginTop: vh * 0.03 }}>
                Create Blog
            </Text>
            <ScrollView contentContainerStyle={Styles.container}>
                <View style={{ flex: 0.35 }}>
                    <ImagePickers title="Upload Photo" width={300} height={100} borderRadius={10} />
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