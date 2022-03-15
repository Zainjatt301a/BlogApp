import React from 'react'
import { View, TextInput } from 'react-native'

const TextInputs = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View>
            <TextInput placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={{ borderColor: "black", borderWidth: 1, padding: 5, marginHorizontal: 20, marginTop: 20, borderRadius: 5 }}
            />
        </View>
    )
}

export default TextInputs