import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Post } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vh, vw } from '../../constants';

const Home = ({ navigation }) => {

    const openCreateBlog = () => {
        navigation.navigate("CreateBlog")
    }
    const openBlogDetail = () => {
        navigation.navigate("BlogDetail")
    }

    return (

        <ScrollView contentContainerStyle={{ flex: 1 }} style={Styles.container} >
            <View style={{ flex: 0.18, marginTop: 20 }}>
                <Text style={{ fontSize: 30 }}>Home</Text>
            </View>

            <ScrollView contentContainerStyle={{ flex: 0.45 }}>
                <Post onPressForComment={() => navigation.navigate("Comments")} onPressForBlogDetail={openBlogDetail} />
            </ScrollView>
            <View style={{ alignItems: "flex-end", marginRight: vw * 0.03, position: "relative", bottom: 50 }}>
                <TouchableOpacity
                    onPress={openCreateBlog}
                    style={{ backgroundColor: "black", width: 100, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                    <Text style={{ color: "white" }}>Create a Blog</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >

    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Home