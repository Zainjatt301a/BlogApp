import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import { vh } from '../../constants'

const Comments = ({ route }) => {
    const [userDetails, setuserDetails] = useState({})
    const [commentText, setCommentText] = useState("")
    // console.log(commentText, "Commment Text");

    const { firebaseKey, data } = route.params
    // setCommentDetails()
    console.log(route.params.data.comment, "Comment");

    // console.log(firebaseKey, data, 'route')
    // console.log(route.params.data.comment, "Route");


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
        comments.push({ name: userDetails.name, email: userDetails.email, image: userDetails.image, comment: commentText })
        firebase.database().ref(`blogs/${firebaseKey}`).update({
            ...data,
            comment: comments
        }).then(res => {
            setCommentText("")
            // console.log('Updated')
        })
    }

    console.log(userDetails, "UserDetails")
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <ScrollView contentContainerStyle={Styles.container} >
                    {
                        route?.params?.data?.comment?.map((item, index) => {
                            console.log(item, "Itemsss");
                            return (
                                <View style={{ marginVertical: 10 }} key={index}>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                                        <Image source={{ uri: item?.image }} style={{ width: 50, height: 50, borderRadius: 100 }} />
                                        <Text>{item?.time}</Text>
                                    </View>
                                    <View style={{ marginLeft: 30, marginTop: 20 }}>
                                        <Text style={{ fontSize: 16 }}>{item?.comment}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </ScrollView>


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
    )
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // justifyContent: "space-between"
    },
    commentView: {
        flexGrow: 0.04,
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "space-between",
        marginHorizontal: 10,
        borderColor: "#808080",
        borderRadius: 5,
        padding: 10,
        // marginTop: 10,
        // height: vh * 0.06
    }
})

export default Comments