import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Button
} from 'react-native';

const image = { uri: "https://ak.picdn.net/shutterstock/videos/1020873769/thumb/6.jpg" };

const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Webshop</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>E-mail</Text>
            <View style={styles.action}>
                <TextInput placeholder='your e-mail' style={styles.textInput}></TextInput>
            </View>
            <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
            <View style={styles.action}>
                <TextInput secureTextEntry={true} placeholder='your password' style={styles.textInput}></TextInput>
            </View>
            <View style={styles.button}>
                <Button title='Login' />
            </View>
            <View style={styles.signUpButton}>
                <Button title='Sign Up' />
            </View>
        </View>

    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0288d1',
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    header: {
        flex: 3,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signUpButton: {
        alignItems: 'center',
        marginTop: 20,
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default LoginScreen;