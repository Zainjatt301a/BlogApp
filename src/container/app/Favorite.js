import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../../constants';
import firebase from 'firebase';

const Favorite = ({ navigation }) => {
    // const [isFavorite, setIsFavorite] = useState(false)
    const [array, setArray] = useState({});

    useEffect(() => {
        let id = firebase.auth().currentUser.uid
        firebase.database().ref(`favourite/${id}`)
            .on("value", snapshot => {
                // console.log(snapshot.val(), "snapshottttt");
                // tempArray.push(snapshot.val())
                let temp = snapshot.val() ? snapshot.val() : {}
                // console.log(tempArray, "tempArray");
                setArray(temp)
            })
    }, [])

    const navigateToBlogDetail = (data, firebaseKey) => {
        navigation.navigate("BlogDetail", { data, firebaseKey })
    }

    let keys = Object.keys(array)
    console.log(keys, "keys");
    return (
        <>
            <View style={{ flex: 0.10, marginTop: vh * 0.02 }}>
                <Text style={{ fontSize: 30 }}> Favorite Blogs</Text>
            </View>
            <ScrollView style={Styles.container}>
                {
                    keys.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigateToBlogDetail(array[item], item)}
                                key={index} style={{ borderRadius: 10, flexDirection: "row", borderWidth: 1, marginVertical: 20, alignItems: "center" }}>
                                <View>
                                    <Image source={{ uri: array[item].image }} style={{ width: vw * 0.4, height: 100, resizeMode: "cover" }} />
                                </View>
                                <View style={{ flex: 1, marginHorizontal: 5 }}>

                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "600" }}>{array[item].title}</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )
                    })
                }


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