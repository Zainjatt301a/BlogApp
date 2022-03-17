import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../../constants';

const Favorite = () => {
    const [isFavorite, setIsFavorite] = useState(false)

    const favoritePost = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <ScrollView style={Styles.container}>
            <View style={{ flex: 0.20 }}>
                <Text style={{ fontSize: 30 }}> Favorite</Text>
            </View>
            <View style={{ flex: 0.80, marginTop: vh * 0.03 }}>
                <View style={{ borderWidth: 1, marginHorizontal: 10, flexDirection: "row", borderRadius: 10 }}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image source={{ uri: "https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550__340.png" }} style={{ width: 300, height: 200 }} />
                    </View>
                    <TouchableOpacity onPress={favoritePost}>
                        {isFavorite ?
                            <AntDesign name="heart" style={{ marginRight: vw * 0.02, marginTop: vh * 0.02 }} size={24} color="red" />
                            :
                            <AntDesign name="hearto" style={{ marginRight: vw * 0.02, marginTop: vh * 0.02 }} color="black" size={24} />

                        }
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Favorite