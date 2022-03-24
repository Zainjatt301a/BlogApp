import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import blogPic from '../../assets/facebookLogo.png'
import { vh, vw } from '../../constants'

const BlogDetail = ({ route }) => {
    console.log(route.params.data, "Propssssssss");
    const { title, description } = route.params.data;
    return (
        <>
            <View style={{ marginTop: vh * 0.03, flex: 0.10 }}>
                <Text style={{ fontSize: 30 }}>
                    Blog Detail
                </Text>
            </View>
            <ScrollView style={Styles.container}>

                <View style={{ backgroundColor: "blue", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
                    <Image source={{ uri: "https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" }} style={{ width: vw, height: 200, resizeMode: "cover" }} />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 0.20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
                </View>
                <View style={{ alignItems: "center", flex: 0.70, marginTop: vh * 0.02 }}>
                    <Text style={{ textAlign: "center", marginHorizontal: 10, fontSize: 15, lineHeight: vh * 0.03 }}>
                        {description}
                    </Text>
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

export default BlogDetail