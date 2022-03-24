import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../../constants';
import firebase from 'firebase';

const Favorite = () => {
    // const [isFavorite, setIsFavorite] = useState(false)
    const [array, setArray] = useState([]);

    useEffect(() => {

        let tempArray = [];
        let id = firebase.auth().currentUser.uid
        firebase.database().ref(`favourite/${id}`)
            .on("value", snapshot => {
                console.log(snapshot.val(), "snapshottttt");
                // tempArray.push(snapshot.val())
                snapshot.forEach(innerVal => {
                    tempArray.push(innerVal.val())
                    // innerVal.forEach(more => {
                    //     console.log(more.val(), "moreeeeee");
                    //     tempArray.push(more.val())

                    // })
                    console.log(innerVal.val(), "innerVal");
                })
                console.log(tempArray, "tempArray");
                setArray(tempArray)
            })
    }, [])

    // const favoritePost = () => {
    //     // setIsFavorite(!isFavorite)
    // }
    console.log(array, "Favirote ARRAY");
    return (
        <>
            <View style={{ flex: 0.10, marginTop: vh * 0.02 }}>
                <Text style={{ fontSize: 30 }}> Favorite Blogs</Text>
            </View>
            <ScrollView style={Styles.container}>
                {
                    array.map((item) => {
                        return (
                            <TouchableOpacity style={{ borderRadius: 10, flexDirection: "row", borderWidth: 1, marginVertical: 20, alignItems: "center" }}>
                                <View>
                                    <Image source={{ uri: "https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" }} style={{ width: vw * 0.4, height: 100, resizeMode: "cover" }} />
                                </View>
                                <View style={{ flex: 1, marginHorizontal: 5 }}>

                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.title}</Text>
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