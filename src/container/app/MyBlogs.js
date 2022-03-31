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
                let data = snapshot.val() ? snapshot.val() : {}
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
            {/* <ScrollView style={Styles.container}>
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


            </ScrollView > */}
            <ScrollView style={Styles.container} >
                {
                    keys.map((item, index) => {
                        let id = firebase.auth().currentUser.uid
                        if (userBlogs[item].createdBy === id) {
                            return (
                                <ScrollView style={{ flexGrow: 1, marginVertical: 10, borderRadius: 10, backgroundColor: "#E0E4EA", paddingVertical: 10 }} key={index} >
                                    <View style={{
                                        flexDirection: "row", alignItems: "center",
                                        marginHorizontal: 10, marginTop: vh * 0.03, justifyContent: "space-between"
                                    }}>
                                        {
                                            userBlogs[item]?.userData?.image ? <Image source={{ uri: userBlogs[item]?.userData?.image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                                :
                                                <Image source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg" }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                        }
                                    </View>
                                    <View style={{
                                        flexDirection: "row", alignItems: "center",
                                        marginHorizontal: 10, marginVertical: 10
                                    }}>
                                        <Text style={{ color: "black", fontSize: 16 }}>Posted Date: <Text style={{ fontSize: 14 }}> {userBlogs[item]?.date}</Text></Text>
                                    </View>


                                    <TouchableOpacity
                                        onPress={() => naviateToBlogDetail(userBlogs[item], item)}
                                        style={{ marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "900", lineHeight: 25, color: "black" }}>{userBlogs[item].title}</Text>
                                    </TouchableOpacity>

                                </ScrollView>
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