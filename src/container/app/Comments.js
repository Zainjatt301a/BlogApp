import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

const Comments = ({ route }) => {
    const [userDetails, setuserDetails] = useState({})

    const { firebaseKey, data } = route.params
    console.log(firebaseKey, data, 'route')
    const commentItems = [
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "Very Nice",
            time: new Date().toLocaleTimeString()
        },
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "Wow",
            time: new Date().toLocaleTimeString()
        },
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "amazing",
            time: new Date().toLocaleTimeString()
        },
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "test",
            time: new Date().toLocaleTimeString()
        },
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "hello",
            time: new Date().toLocaleTimeString()
        },
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "new",
            time: new Date().toLocaleTimeString()
        },
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "Outstanding",
            time: new Date().toLocaleTimeString()
        },
        {
            profile: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg",
            comment: "nice one",
            time: new Date().toLocaleTimeString()
        },
    ]
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
        comments.push({ name: userDetails.name, email: userDetails.email, comment: "Testing Comment" })
        firebase.database().ref(`blogs/${firebaseKey}`).update({
            ...data,
            comment: comments
        }).then(res => {
            console.log('Updated')
        })
    }
    return (
        <View style={{ flex: 1 }}>

            <ScrollView style={Styles.container}>
                {
                    commentItems.map((item, index) => {
                        return (
                            <View style={{ marginTop: 20 }} key={index}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                                    <Image source={{ uri: item.profile }} style={{ width: 50, height: 50, borderRadius: 100 }} />
                                    <Text>{item.time}</Text>
                                </View>
                                <View style={{ marginLeft: 30, marginTop: 20 }}>
                                    <Text>{item.comment}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View style={Styles.commentView}>
                <TextInput enablesReturnKeyAutomatically placeholder='Comment Now' />
                <TouchableOpacity onPress={handleCommentSubmit}>
                    <Text>Post</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    commentView: {
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