import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import blogPic from '../../assets/facebookLogo.png'
import { vh } from '../../constants'

const BlogDetail = () => {
    return (
        <ScrollView style={Styles.container}>
            <View style={{ marginTop: 20, flex: 0.20 }}>
                <Text style={{ fontSize: 30 }}>
                    Blog Detail
                </Text>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={{ uri: "https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550__340.png" }} style={{ width: 300, height: 200 }} />
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 0.20 }}>
                <Text>Title</Text>
            </View>
            <View style={{ alignItems: "center", flex: 0.70, marginTop: vh * 0.02 }}>
                <Text style={{ textAlign: "center", marginHorizontal: 10 }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Text>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default BlogDetail