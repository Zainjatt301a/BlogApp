import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

const Comments = () => {
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
                <TouchableOpacity>
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