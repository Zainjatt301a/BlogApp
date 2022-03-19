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
        <>
            <View style={{ flex: 0.10, marginTop: vh * 0.02 }}>
                <Text style={{ fontSize: 30 }}> Favorite</Text>
            </View>
            <ScrollView style={Styles.container}>

                <TouchableOpacity style={{ borderRadius: 10, flexDirection: "row", borderWidth: 1, marginVertical: 20, alignItems: "center" }}>
                    <View>
                        <Image source={{ uri: "https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" }} style={{ width: vw * 0.4, height: 100, resizeMode: "cover" }} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                        <TouchableOpacity onPress={favoritePost} style={{ alignItems: "flex-end" }} >
                            {isFavorite ?
                                <AntDesign name="heart" style={{ marginRight: vw * 0.02, marginTop: vh * 0.02 }} size={24} color="red" />
                                :
                                <AntDesign name="hearto" style={{ marginRight: vw * 0.02, marginTop: vh * 0.02 }} color="black" size={24} />

                            }
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>Ten Things You Didn't Know About Blockchain.</Text>
                        </View>

                    </View>
                </TouchableOpacity>

            </ScrollView >
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Favorite