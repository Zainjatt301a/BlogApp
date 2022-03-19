import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../constants';


const Post = ({ onPressForComment, onPressForBlogDetail, title, pic }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const likePost = () => {
        setIsLiked(!isLiked)
    }
    const favoritePost = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <TouchableOpacity onPress={onPressForBlogDetail} style={Styles.container}>

            <View style={{ flex: 0.20, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                <TouchableOpacity onPress={favoritePost}>
                    {isFavorite ?
                        <AntDesign name="heart" style={{ marginRight: vw * 0.02 }} size={24} color="red" />
                        :
                        <AntDesign name="hearto" style={{ marginRight: vw * 0.02 }} color="black" size={24} />

                    }

                </TouchableOpacity>

            </View>
            <View style={{ flex: 0.30, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
            </View>
            <Image source={{ uri: pic }} style={{ resizeMode: "cover", flex: 1, justifyContent: "center", alignItems: "center" }} />

            <View style={{ flex: 0.30, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={likePost}>
                    <Text style={isLiked ? { color: "blue" } : { color: "black" }}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressForComment}>
                    <Text>Comment</Text>
                </TouchableOpacity>
            </View>


        </TouchableOpacity >
    )
}

const Styles = StyleSheet.create({
    container: {

        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: vh * 0.03,
        height: 350,

    }
})
export default Post
