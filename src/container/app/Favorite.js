import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../../constants';
import firebase from 'firebase';

const Favorite = ({ navigation }) => {
    // const [isFavorite, setIsFavorite] = useState(false)
    const [array, setArray] = useState({});
    console.log(array, "Favorite");

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
        // <>
        //     <View style={{ flex: 0.10, marginTop: vh * 0.02 }}>
        //         <Text style={{ fontSize: 30 }}> Favorite Blogs</Text>
        //     </View>
        //     <ScrollView contentContainerStyle={Styles.container}>
        //         {
        //             keys.map((item, index) => {
        //                 return (
        //                     <>
        //                         <View style={{}}>
        //                             <View style={{ marginHorizontal: 10 }}>
        //                                 <Text style={{ fontSize: 15, fontWeight: "600" }}>{array[item].title}</Text>
        //                             </View>
        //                             <TouchableOpacity
        //                                 onPress={() => navigateToBlogDetail(array[item], item)}
        //                                 style={{ justifyContent: "center", alignItems: "center", marginTop: vh * 0.01 }}>
        //                                 <Image source={{ uri: array[item].image }} style={{ width: vw * 0.91, height: vh * 0.3 }} />
        //                             </TouchableOpacity>
        //                         </View>
        //                     </>
        //                 )
        //             })
        //         }


        //     </ScrollView >
        // </>
        <ScrollView style={Styles.container} >
            {
                keys.map((item, index) => {
                    return (
                        <ScrollView style={{ flexGrow: 1, marginVertical: 10, borderRadius: 10, backgroundColor: "#E0E4EA", paddingVertical: 10 }} key={index} >
                            <View style={{
                                flexDirection: "row", alignItems: "center",
                                marginHorizontal: 10, marginTop: vh * 0.03, justifyContent: "space-between"
                            }}>
                                {
                                    array[item]?.userData?.image ? <Image source={{ uri: array[item]?.userData?.image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                        :
                                        <Image source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg" }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                }
                            </View>
                            <View style={{
                                flexDirection: "row", alignItems: "center",
                                marginHorizontal: 10, marginVertical: 10
                            }}>
                                <Text style={{ color: "black", fontSize: 16 }}>Posted Date: <Text style={{ fontSize: 14 }}> {array[item]?.date}</Text></Text>
                            </View>


                            <TouchableOpacity
                                onPress={() => navigateToBlogDetail(array[item], item)}
                                style={{ marginHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: "900", lineHeight: 25, color: "black" }}>{array[item].title}</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    )
                })
            }


        </ScrollView >

    )
}


const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: vh * 0.03,
        width: vw * 0.95
    }
})

export default Favorite