import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { loginEmail, googleSignin } from '../Hooks/AuthenticationHools';

import GoogleBTN from '../Components/GoogleBTN';




export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login =async () => {
        loginEmail(email, password)
            .then((id) => {
                if (id) {
                    console.log(id)
                    navigation.navigate('Tabbar')
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }


    return (
        <ImageBackground source={{ uri: 'https://res.cloudinary.com/dlhwfesiz/image/upload/v1680655574/home_aqhx7k.jpg' }} style={styles.background}>
            <ScrollView style={styles.overlay}>
                <View style={styles.register_div}><Text onPress={()=>{navigation.navigate('Signup')}} style={styles.register_txt}>Register Now!</Text></View>
                <View style={styles.Signup_txt_div}>
                    <Text style={styles.Signup_txt}>Sign In</Text>
                    <Text style={styles.Signup_txt_helping}>"Your key to finding your dream home starts here - log in and unlock the possibilities with our top-notch real estate app."- Welcome to our real estate app</Text>
                </View>
                <View style={styles.main_div}>
                    <View style={styles.input_div}>
                        <View style={styles.input_field}>
                            <Ionicons name="mail" size={30} color="#37306B" />
                            <TextInput placeholder="Email Required" style={styles.input}onChangeText={newText => setEmail(newText)} />
                        </View>
                        <View style={styles.input_field}>
                            <Ionicons name="lock-closed" size={30} color="#37306B" />
                            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} onChangeText={(text) => { setPassword(text) }}/>
                        </View>
                    </View>
                    <View><Text style={styles.forgot} onPress={() => { console.log("hello"); }}>Forgot Password</Text></View>
                    <View style={styles.BTN_div}>
                        <TouchableOpacity style={{ backgroundColor: '#37306B', width: 300, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}
                            onPress={() => {
                                Login()
                            }}
                        >
                            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '600' }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginVertical: 40, textAlign: 'center' }}>OR</Text>
                    <View style={styles.BTN_div}>
                        <GoogleBTN shadowCLR={"#000000"}/>

                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: '#000000',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: Dimensions.get('window').height,
    },
    register_div: {
        justifyContent: 'center',
        height: Dimensions.get('window').height * .15,
    },
    register_txt: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'right',
        marginRight: 20,
    },
    Signup_txt_div: {
        height: Dimensions.get('window').height * .2,
        marginLeft: 40,
        marginBottom: 20
    },
    Signup_txt: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 20
    },
    Signup_txt_helping: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '600',
        marginRight: 20,
    },
    main_div: {
        height: Dimensions.get('window').height * .65,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20
    },
    input_div: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        gap: 20
    },
    input_field: {
        flexDirection: 'row',
        gap: 10,
        borderRadius: 20,
        backgroundColor: '#EEEEEE',
        width: 300,
        height: 60,
        alignItems: 'center',
        overflow: 'hidden', // This is important to clip the inner shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
        paddingLeft: 20,
    },

    input: {
        borderLeftColor: '#37306B',
        width: 200,
        borderLeftWidth: 1,
        padding: 10,

        fontSize: 16
    },
    forgot: {
        color: '#37306B',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 7
    },
    BTN_div: {
        justifyContent: 'center',
        alignItems: 'center'
    },

})
