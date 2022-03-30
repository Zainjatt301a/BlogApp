import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Animated } from 'react-native'
import { headerColor, vh } from '../constants'




const TextInputs = ({ placeholder, value, onChangeText, secureTextEntry, height, borderWidth, color, fontSize, marginTop }) => {


    const executeScroll = () => {
        window.scrollY
    }

    return (
        <View>
            <TextInput placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={{ ...Styles.container, height: height, borderWidth: borderWidth, textAlignVertical: "top", color: color, fontSize: fontSize, marginBottom: marginTop }}
                onFocus={executeScroll}
                multiline={true}

            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        borderColor: headerColor,
        borderBottomWidth: 0.7,
        padding: 5,
        marginHorizontal: 20,
        marginTop: vh * 0.03,
        borderRadius: 5
    }
})

export default TextInputs