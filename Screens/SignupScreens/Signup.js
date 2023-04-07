import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoogleBTN from '../../Components/GoogleBTN';


const Signup = ({ navigation }) => {
    return (
        <ImageBackground source={{ uri: 'https://res.cloudinary.com/dlhwfesiz/image/upload/v1680655574/home_aqhx7k.jpg' }} style={styles.background}>
            <ScrollView style={styles.overlay}>
                <View style={styles.Login_div}><Text onPress={() => { navigation.navigate('Login') }} style={styles.Login_txt}>Login!</Text></View>
                <View style={styles.register_div}><Text style={styles.register_txt}>Welcome!</Text></View>
                <View style={styles.main_div}>
                    <View style={styles.input_div}>
                        <View style={styles.input_field}>
                            <Ionicons name="person" size={30} color="#37306B" />
                            <TextInput placeholder="Name Required" style={styles.input} onChangeText={newText => setEmail(newText)} />
                        </View>
                        <View style={styles.input_field}>
                            <Ionicons name="mail" size={30} color="#37306B" />
                            <TextInput placeholder="Email Required" style={styles.input} onChangeText={newText => setEmail(newText)} />
                        </View>
                        <View style={styles.input_field}>
                            <Ionicons name="lock-closed" size={30} color="#37306B" />
                            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} onChangeText={(text) => { setPassword(text) }} />
                        </View>
                    </View>
                    <View style={styles.BTN_div}>
                        <TouchableOpacity style={{ backgroundColor: '#37306B', width: 200, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}
                        // onPress={() => {
                        //     Login()
                        // }}
                        >
                            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '600' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginVertical: 40, textAlign: 'center', color:'#fff' }}>OR</Text>
                    <View style={styles.BTN_div}>
                    <GoogleBTN shadowCLR={"#fffffff"}/>

                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Signup

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: '#000000',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: Dimensions.get('window').height,
    },
    Login_div: {
        justifyContent: 'center',
        height: Dimensions.get('window').height * .15,
    },
    Login_txt: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'right',
        marginRight: 20,
    },
    register_div: {
        justifyContent: 'center',
        height: Dimensions.get('window').height * .1,
        marginLeft: 40
    },
    register_txt: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '600',
    },
    main_div: {
        height: Dimensions.get('window').height * .7,
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

    BTN_div: {
        justifyContent: 'center',
        alignItems: 'center'
    },

})