import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ImagePickers, TextInputs, Button, RichTextEditor } from '../../components'

const CreateBlog = () => {
    return (
        <View style={Styles.container}>
            <View style={{ flex: 0.28 }}>
                <Text style={{ fontSize: 30 }}>
                    Create Blog
                </Text>

                <ImagePickers title="Upload Photo" width={300} height={100} borderRadius={10} />

            </View>
            <View style={{ flex: 0.12 }}>
                <Text style={{ textAlign: "center" }}>Title</Text>
                <TextInputs />
            </View>
            <View style={{ flex: 0.30 }}>
                {/* <TextInputs /> */}
                <RichTextEditor />
            </View>
            <View style={{ flex: 0.22 }}>
                <Button name="Post" color="black" />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
})

export default CreateBlog