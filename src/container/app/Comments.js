import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

const Comments = ({ route }) => {
    const [userDetails, setuserDetails] = useState({})
    const [commentText, setCommentText] = useState("")
    // console.log(commentText, "Commment Text");

    const { firebaseKey, data } = route.params
    // setCommentDetails()
    console.log(route.params.data.comment, "Comment");

    // console.log(firebaseKey, data, 'route')
    // console.log(route.params.data.comment, "Route");

    // const commentItems = [
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "Very Nice",
    //         time: new Date().toLocaleTimeString()
    //     },
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "Wow",
    //         time: new Date().toLocaleTimeString()
    //     },
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "amazing",
    //         time: new Date().toLocaleTimeString()
    //     },
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "test",
    //         time: new Date().toLocaleTimeString()
    //     },
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "hello",
    //         time: new Date().toLocaleTimeString()
    //     },
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "new",
    //         time: new Date().toLocaleTimeString()
    //     },
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "Outstanding",
    //         time: new Date().toLocaleTimeString()
    //     },
    //     {
    //         profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
    //         comment: "nice one",
    //         time: new Date().toLocaleTimeString()
    //     },
    // ]
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
                setuserDetails(data)

            })
    }
    const handleCommentSubmit = () => {
        let comments = data.comment || []
        comments.push({ name: userDetails.name, email: userDetails.email, comment: commentText })
        firebase.database().ref(`blogs/${firebaseKey}`).update({
            ...data,
            comment: comments
        }).then(res => {
            // console.log('Updated')
        })
    }

    // console.log(userDetails, "UserDetails")
    return (
        // <View style={{ flex: 1 }}>
        <>
            <ScrollView contentContainerStyle={Styles.container} >
                {
                    route.params.data.comment?.map((item, index) => {
                        console.log(item, "Itemsss");
                        return (
                            <View style={{ marginTop: 20 }} key={index}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                                    <Image source={{ uri: item.profile }} style={{ width: 50, height: 50, borderRadius: 100 }} />
                                    <Text>{item?.time}</Text>
                                </View>
                                <View style={{ marginLeft: 30, marginTop: 20 }}>
                                    <Text>{item?.comment}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <KeyboardAvoidingView
                behavior={'padding'}
                // keyboardVerticalOffset={10}
                // behavior='position' 
                // contentContainerStyle={Styles.commentView}
                style={Styles.commentView}
            >
                <TextInput placeholder='Comment Now'
                    value={commentText}
                    onChangeText={(text) => setCommentText(text)}
                    style={{ textAlignVertical: "top" }}
                />
                <TouchableOpacity onPress={handleCommentSubmit}>
                    <Text>Post</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
        // {/* </View> */ }
    )
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    commentView: {
        flexGrow: 0.01,
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "space-between",
        marginHorizontal: 10,
        borderColor: "#808080",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    }
})

export default Comments