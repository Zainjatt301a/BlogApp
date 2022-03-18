import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../constants';


const Post = ({ onPressForComment, onPressForBlogDetail }) => {
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

            <View style={{ flex: 0.20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text>Title</Text>
                <TouchableOpacity onPress={favoritePost}>
                    {isFavorite ?
                        <AntDesign name="heart" style={{ marginRight: vw * 0.02 }} size={24} color="red" />
                        :
                        <AntDesign name="hearto" style={{ marginRight: vw * 0.02 }} color="black" size={24} />

                    }

                </TouchableOpacity>
            </View>

            <Image source={{ uri: "https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550__340.png" }} style={{ resizeMode: "cover", flex: 0.60, justifyContent: "center", alignItems: "center" }} />

            <View style={{ flex: 0.20, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={likePost}>
                    <Text style={isLiked ? { color: "blue" } : { color: "black" }}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressForComment}>
                    <Text>Comment</Text>
                </TouchableOpacity>
            </View>


        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: vh * 0.03,
    }
})
export default Post
