import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Post } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vh, vw } from '../../constants';
import firebase from 'firebase';

const Home = ({ navigation }) => {


    const [blogsData, setBlogsData] = useState({});
    const openCreateBlog = (firebaseKey, data) => {
        navigation.navigate("Comments", { firebaseKey, data })
    }
    const openBlogDetail = (item) => {
        navigation.navigate("BlogDetail", { data: item })
    }
    useEffect(() => {
        firebase.database().ref("blogs")
            .on("value", snapshot => {
                let data = snapshot.val() ? snapshot.val() : {}

                // snapshot.forEach(innerVal => {
                //     innerVal.forEach(more => {
                //         // console.log(more.val(),"moreeeeee");
                //         tempArray.push(more.val())

                //     })
                //     // console.log(innerVal.val(),"innerVal");
                // })
                // console.log(tempArray,"tempArray");
                setBlogsData(data)
            })
    }, [])

    const [favArray, setFavArray] = useState([])
    useEffect(() => {
        let tempArray = [];
        firebase.database().ref(`favourite/${firebase.auth().currentUser.uid}`)
            .on("value", snapshot => {
                // console.log(snapshot.val(), "snapshottttt");
                let data = snapshot.val() ? snapshot.val() : {}
                // snapshot.forEach(innerVal => {
                //     innerVal.forEach(more => {
                //         console.log(innerVal.val(), "moreeeeee");
                //         tempArray.push(innerVal.val())

                //     })
                //     // console.log(innerVal.val(),"innerVal");
                // })
                // console.log(tempArray, "tempArray");
                setFavArray(data)
            })
    }, [])

    const [likedArray, setLikedArray] = useState([])
    useEffect(() => {
        let tempArray = [];
        firebase.database().ref(`Likes/${firebase.auth().currentUser.uid}`)
            .on("value", snapshot => {
                // console.log(snapshot.val(), "snapshottttt");
                let data = snapshot.val() ? snapshot.val() : {}
                // snapshot.forEach(innerVal => {
                //     innerVal.forEach(more => {
                //         console.log(innerVal.val(), "moreeeeee");
                //         tempArray.push(innerVal.val())

                //     })
                //     // console.log(innerVal.val(),"innerVal");
                // })
                // console.log(tempArray, "tempArray");
                setLikedArray(data)
            })
    }, [])

    console.log(blogsData, 'blogsData')
    let blogsKeys = Object.keys(blogsData)
    // console.log(blogsKeys, 'blogsKeys')

    return (
        <>
            <View style={{ flex: 0.10, marginTop: vh * 0.03, marginHorizontal: 5 }}>
                <Text style={{ fontSize: 30 }}>Home</Text>
            </View>
            <ScrollView style={Styles.container} >

                {blogsKeys?.map((val, index) => {
                    let items = blogsData[val]
                    return (
                        < View key={index} >
                            <Post
                                favArray={favArray}
                                likedArray={likedArray}
                                onPressForComment={() => openCreateBlog(val, items)}
                                data={items}
                                onPressForBlogDetail={openBlogDetail}
                                title={items.title}
                                pic={items.image}
                                description={items.description}
                                firebaseKey={val}
                            />

                        </View>
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
export default Home