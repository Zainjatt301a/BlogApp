import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import blogPic from '../../assets/facebookLogo.png'
import { vh, vw } from '../../constants'

const Profile = ({ navigation }) => {
    const auth = getAuth()
    const logoutUser = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            alert("something went wrong")
        });
    }
    return (
        <View style={Styles.container}>
            <View style={{ marginTop: 20, flex: 0.20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 30 }}>
                        Profile
                    </Text>
                    <TouchableOpacity
                        onPress={logoutUser}
                        style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
                        <Text style={{ color: "white" }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/50/29/user-icon-male-person-symbol-profile-avatar-vector-20715029.jpg" }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 0.40 }}>
                <View style={{ backgroundColor: "black", flex: 0.30, width: vw * 0.9, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: vh * 0.05 }}>
                    <Text style={{ color: "white", fontSize: 18 }}>Zain Ul Abdeen</Text>
                </View>
                <View style={{ backgroundColor: "black", flex: 0.30, width: vw * 0.9, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: vh * 0.02 }}>
                    <Text style={{ color: "white", fontSize: 18 }}>zain1@gmail.com</Text>
                </View>
                <View style={{ backgroundColor: "black", flex: 0.30, width: vw * 0.9, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: vh * 0.02 }}>
                    <Text style={{ color: "white", fontSize: 18 }}>123456</Text>
                </View>
            </View>
            <TouchableOpacity style={{ flex: 0.10, justifyContent: "center", alignItems: "center" }}
                onPress={() => navigation.navigate("Favorite")}
            >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Favorites</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Profile