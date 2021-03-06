import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import blogPic from '../../assets/facebookLogo.png'
import { vh, vw } from '../../constants'

const BlogDetail = ({ route }) => {
    console.log(route.params.data, "Propssssssss");
    const { title, description, image, userData } = route.params.data;
    return (
        <>
            <ScrollView contentContainerStyle={Styles.container}>

                <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 20, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 25, textAlign: "left", lineHeight: 30 }}>{title}</Text>
                </View>
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={{ textAlign: "center", marginHorizontal: 10, fontSize: 16, color: "black" }}>
                        Author: <Text style={{ color: "#67768C" }}>{userData?.name}</Text>
                    </Text>
                </View>
                <View style={{ backgroundColor: "blue", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
                    <Image source={{ uri: image }} style={{ width: vw, height: 200, resizeMode: "cover" }} />
                </View>
                <View style={{ alignItems: "center", flex: 0.70, marginTop: vh * 0.02 }}>
                    <Text style={{ textAlign: "center", marginHorizontal: 10, fontSize: 16, lineHeight: vh * 0.03, color: "#67768C" }}>
                        {description}
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})

export default BlogDetail