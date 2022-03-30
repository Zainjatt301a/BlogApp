import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { vh, headerColor } from '../constants';


export default function ImagePickers({ width, borderRadius, height, title, picImage, type, val }) {
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

    const renderProfileIcon = () => {
        if (image) {
            return (
                <Image source={{ uri: image }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )
        }
        else {
            return (
                <Image
                    source={{ uri: "https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" }}

                    style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
            )
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                type !== "profile" && < Button title={title} onPress={pickImage} color={headerColor} />
            }

            {type === "profile" ?
                <TouchableOpacity onPress={pickImage}>
                    <Image source={{ uri: val }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />
                </TouchableOpacity>
                :
                renderProfileIcon()
            }
        </View>
    );
}

const Styles = StyleSheet.create({
    ImageProps: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginVertical: 10
    }
})