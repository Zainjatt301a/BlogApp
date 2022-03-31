import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { vh, headerColor } from '../constants';
import { AntDesign } from '@expo/vector-icons';


export default function ImagePickers({ width, borderRadius, height, title, picImage, type, val, pic, value }) {
    const [image, setImage] = useState(null);


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            let base64Img = `data:image/jpg;base64,${result.base64}`
            picImage(base64Img)

            // await uploadImage(result.uri)

        }
    };

    // console.log(value, "Val");
    // const renderSomething = () => {
    //     if (value === "") {
    //         return (
    //             <Image
    //                 source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg" }}
    //                 style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
    //         )
    //     }
    // }

    const renderPlaceholder = () => {
        if (type === "register") {
            return (
                <Image
                    source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg" }}

                    style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )

        } else {
            return (
                <Image

                    source={{ uri: "https://ssd-conf.org/wp-content/uploads/2016/06/blog-thumb-placeholder.jpg" }}

                    style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )
        }
    }

    const renderSomething = () => {
        if (value) {
            return (
                <Image source={{ uri: value }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )
        } else {
            return (
                <Image source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg" }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )
        }
    }

    const imageUrl = () => {
        if (pic) {
            return (
                <Image source={{ uri: pic }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )
        } else {
            return (
                <Image source={{ uri: "https://ssd-conf.org/wp-content/uploads/2016/06/blog-thumb-placeholder.jpg" }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )
        }
    }


    const renderProfileIcon = () => {
        if (image) {
            return (
                // checkImage()
                type === "create" ? imageUrl() : renderSomething()
            )
        }
        else {
            return renderPlaceholder()
        }
    }

    return (
        type === "create" ?
            < View
                style={type === "register" ? Styles.mainView : Styles.mainViewCreateBlog
                }>
                {
                    type !== "profile" && <AntDesign name="clouduploado" style={{ marginLeft: 5 }} size={25} color="black" onPress={pickImage} />
                }
                {type === "profile" ?
                    <TouchableOpacity onPress={pickImage}>
                        <Image source={{ uri: val }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
                    </TouchableOpacity>
                    :
                    renderProfileIcon()
                }

            </View >
            :
            < View
                style={type === "register" ? Styles.mainView : Styles.mainViewCreateBlog
                }>
                {type === "profile" ?
                    <TouchableOpacity onPress={pickImage}>
                        <Image source={{ uri: val }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
                    </TouchableOpacity>
                    :
                    renderProfileIcon()
                }
                {
                    type !== "profile" && <AntDesign name="clouduploado" style={{ marginLeft: 5 }} size={25} color="black" onPress={pickImage} />
                }
            </View >
    )
}

const Styles = StyleSheet.create({
    ImageProps: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginVertical: 10
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
    mainViewCreateBlog: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})