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
        <>
            <View style={{ flex: 0.10, marginTop: vh * 0.03, marginHorizontal: 5 }}>
                <Text style={{ fontSize: 30 }}>Home</Text>
            </View>
            <ScrollView style={Styles.container} >


                <View>
                    <Post onPressForComment={() => navigation.navigate("Comments")} onPressForBlogDetail={openBlogDetail}
                        title="Ten Things You Didn't Know About Blockchain."
                        pic="https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg"
                    />
                    <Post onPressForComment={() => navigation.navigate("Comments")} onPressForBlogDetail={openBlogDetail}
                        title="The 15 Secrets You Will Never Know About Iphone."
                        pic="https://cdn.vox-cdn.com/thumbor/OCYUEEc5odYKWErorN0WNvLa9po=/0x0:2032x1355/1200x800/filters:focal(854x516:1178x840)/cdn.vox-cdn.com/uploads/chorus_image/image/70617253/akrales_210917_4760_0175.0.jpg"
                    />
                </View>

            </ScrollView >
            <View style={{ alignItems: "flex-end", marginRight: vw * 0.03, position: "absolute", bottom: 30, right: 0, }}>
                <TouchableOpacity
                    onPress={openCreateBlog}
                    style={{ backgroundColor: "black", width: 100, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                    <Text style={{ color: "white" }}>Create a Blog</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Home