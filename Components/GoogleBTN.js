import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import googleimg from '../assets/googleimg.png'

import {googleSignin} from '../Hooks/AuthenticationHools'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function GoogleBTN({shadowClr}) {
    const googleLogin = async () => {
        googleSignin()
            .then((id) => {
                if (id) {
                    console.log(id)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <TouchableOpacity
            style={[styles.google_btn, { shadowColor: shadowClr }]}
            onPress={() => {
                googleLogin();
            }}
        >
            <Image source={googleimg} style={{ width: 40, height: 40 }} />
            <Text style={{ color: '#37306B', fontSize: 20, fontWeight: '600' }}>Sign In with Google</Text>
            <Ionicons name='arrow-forward' size={30} color='#37306B' />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    google_btn: {
        backgroundColor: '#fff',
        width: 300,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3, // Add this for Android shadow
    }
})