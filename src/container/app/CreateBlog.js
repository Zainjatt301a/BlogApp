import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ImagePickers, TextInputs, Button, RichTextEditor } from '../../components'
import { vh } from '../../constants'

const CreateBlog = () => {
    return (
        <>
            <Text style={{ fontSize: 30, marginTop: vh * 0.03 }}>
                Create Blog
            </Text>
            <ScrollView contentContainerStyle={Styles.container}>
                <View style={{ flex: 0.35 }}>


                    <ImagePickers title="Upload Photo" width={300} height={100} borderRadius={10} />

                </View>
                <View style={{ flex: 0.20 }}>
                    <Text style={{ textAlign: "center" }}>Title</Text>
                    <TextInputs placeholder="Write title" />
                </View>
                <View style={{ flex: 0.30 }}>
                    {/* <TextInputs /> */}
                    <RichTextEditor />
                </View>
                <View style={{ flex: 0.12 }}>
                    <Button name="Post" color="black" />
                </View>
            </ScrollView>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default CreateBlog