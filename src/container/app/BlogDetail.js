import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import blogPic from '../../assets/facebookLogo.png'
import { vh, vw } from '../../constants'

const BlogDetail = () => {
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
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>Ten Things You Didn't Know About Blockchain.</Text>
                </View>
                <View style={{ alignItems: "center", flex: 0.70, marginTop: vh * 0.02 }}>
                    <Text style={{ textAlign: "center", marginHorizontal: 10, fontSize: 15, lineHeight: vh * 0.03 }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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