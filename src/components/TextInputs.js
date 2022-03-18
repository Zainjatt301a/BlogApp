import React from 'react'
import { View, TextInput } from 'react-native'
import { vh } from '../constants'

const TextInputs = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View>
            <TextInput placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={{ borderColor: "black", borderBottomWidth: 1, padding: 5, marginHorizontal: 20, marginTop: vh * 0.03, borderRadius: 5 }}
            />
        </View>
    )
}

export default TextInputs