import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickers({ width, borderRadius, height, title }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title={title} onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ ...Styles.ImageProps, width: width, borderRadius: borderRadius, height: height }} />}
        </View>
    );
}

const Styles = StyleSheet.create({
    ImageProps: {
        width: 70,
        height: 70,
        borderRadius: 100
    }
})