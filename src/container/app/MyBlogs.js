import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from '../../constants';
import firebase from 'firebase';

const MyBlogs = ({ navigation }) => {


    const [userBlogs, setUserBlog] = useState({})


    useEffect(() => {
        getuserBlogs()
    }, [])

    const getuserBlogs = () => {
        firebase.database().ref(`blogs`)
            .on("value", snapshot => {
                // console.log(snapshot.val(), "Snapshot");
                let data = snapshot.val()
                setUserBlog(data)

            })
    }
    const naviateToBlogDetail = (data, firebaseKey) => {
        navigation.navigate("BlogDetail", { data, firebaseKey })
    }

    console.log(userBlogs, "UserBlogs");
    let keys = Object.keys(userBlogs)
    console.log(keys, "Keys");

    return (
        <>
            <View style={{ flex: 0.10, marginTop: vh * 0.02 }}>
                <Text style={{ fontSize: 30 }}> My Blogs</Text>
            </View>
            <ScrollView style={Styles.container}>
                {
                    keys.map((item, index) => {
                        let id = firebase.auth().currentUser.uid
                        if (userBlogs[item].createdBy === id) {
                            return (
                                <TouchableOpacity
                                    onPress={() => naviateToBlogDetail(userBlogs[item], item)}
                                    key={index} style={{ borderRadius: 10, flexDirection: "row", borderWidth: 1, marginVertical: 20, alignItems: "center" }}>
                                    <View>
                                        <Image source={{ uri: "https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" }} style={{ width: vw * 0.4, height: 100, resizeMode: "cover" }} />
                                    </View>
                                    <View style={{ flex: 1, marginHorizontal: 5 }}>

                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 18, fontWeight: "600" }}>{userBlogs[item].title}</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )
                        }
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

export default MyBlogs