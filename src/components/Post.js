import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../constants';
import firebase from 'firebase';


const Post = ({ onPressForComment, onPressForBlogDetail, title, pic, data, favArray, likedArray, firebaseKey }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    let Data = Object.keys(favArray)
    let DataForLike = Object.keys(likedArray)


    // console.log(Data, "favArrayfavArrayfavArray");
    // console.log(DataForLike, "DataForLike");
    const likePost = () => {
        setIsLiked(!isLiked)
    }
    const favoritePost = () => {
        setIsFavorite(!isFavorite)
    }

    const unFavorite = () => {
        const find = Data.find(item => favArray[item].blogId == data.blogId)
        firebase.database().ref(`favourite/${firebase.auth().currentUser.uid}/${find}`).remove()
            .then(res => {
                alert("removed")
            })
    }

    const unLiked = () => {
        handleUserLike()
        const find = DataForLike.find(item => likedArray[item].blogId == data.blogId)
        firebase.database().ref(`Likes/${firebase.auth().currentUser.uid}/${find}`).remove()
            .then(res => {
                alert("removed")
            })
    }

    const renderIsFav = () => {
        // console.log(favArray[Data], "asd")
        // console.log(favArray, "FAVVV", data, "THINGSS");
        const find = Data.find(item => favArray[item].blogId == data.blogId)
        if (find) {
            return (
                <AntDesign
                    onPress={unFavorite}
                    name="heart" style={{ marginHorizontal: 10, marginTop: 2 }} size={24} color="red" />
            )
        }
        else {
            return (
                <TouchableOpacity onPress={favorite}>
                    <AntDesign name="hearto" style={{ marginHorizontal: 10, marginTop: 2 }} color="black" size={24} />
                </TouchableOpacity>
            )
        }
    }

    const renderiIsLiked = () => {
        const find = DataForLike.find(item => likedArray[item].blogId == data.blogId)
        if (find) {
            return (
                <TouchableOpacity onPress={unLiked}>
                    <Text style={{ color: "blue" }}>Liked ({data?.likes?.length})</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={Likes}>
                    <Text style={{ color: "black" }}>Like ({data?.likes?.length})</Text>
                </TouchableOpacity>
            )
        }

    }
    const handleUserLike = () => {
        console.log('like')
        let userLikes = data.likes || []
        let isExist = userLikes.findIndex(val => val == firebase.auth().currentUser.uid)
        isExist >= 0 ? userLikes.splice(isExist, 1) : userLikes.push(firebase.auth().currentUser.uid)
        console.log(userLikes, 'userLikes')
        firebase.database().ref(`blogs/${firebaseKey}`).update({
            ...data,
            likes: userLikes
        }).then(res => {
            console.log('Updated')
        })
    }

    const favorite = () => {
        firebase
            .database()
            .ref(`favourite/${firebase?.auth()?.currentUser?.uid}`)
            .push({
                ...data,
            })
            .then((res) => {
                alert("done")
            })
            .catch((err) => {

            });

    }

    const Likes = () => {
        handleUserLike()
        firebase
            .database()
            .ref(`Likes/${firebase?.auth()?.currentUser?.uid}`)
            .push({
                ...data,
            })
            .then((res) => {
                alert("done")
            })
            .catch((err) => {

            });

    }

    return (
        <View style={Styles.container}>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "flex-end",
                marginHorizontal: 10, marginVertical: 10
            }}>



                {renderIsFav()}


            </View>
            <View style={{ flex: 0.20, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>{title}</Text>
            </View>
            <TouchableOpacity
                onPress={() => onPressForBlogDetail(data)}
                style={{ justifyContent: "center", flex: 1, alignItems: "center", marginTop: vh * 0.01 }}>
                <Image source={{ uri: pic }} style={{ justifyContent: "center", alignItems: "center", width: vw * 0.91, height: vh * 0.3 }} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: vh * 0.06 }}>
                {renderiIsLiked()}
                <TouchableOpacity

                    onPress={onPressForComment}>
                    <Text>Comment</Text>
                </TouchableOpacity>
            </View>


        </View >
    )
}

const Styles = StyleSheet.create({
    container: {

        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: vh * 0.03,
        // height: vh * 0.6,
        // elevation: 5,
        // width: vw * 0.95,
        // borderWidth: 1
        backgroundColor: "#E0E4EA"
    }
})
export default Post
