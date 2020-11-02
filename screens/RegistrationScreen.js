import 'react-native-gesture-handler';
import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

export const RegistrationScreen = ({navigation}) => {
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Registration</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
                <TextInput placeholder='your name' style={styles.textInput}></TextInput>
            </View>
            <Text style={[styles.text_footer, {marginTop:35}]}>E-mail</Text>
            <View style={styles.action}>
                <TextInput secureTextEntry={true} placeholder='your e-mail' style={styles.textInput}></TextInput>
            </View>
            <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
            <View style={styles.action}>
                <TextInput placeholder='your password' style={styles.textInput}></TextInput>
            </View>
            <Text style={[styles.text_footer, {marginTop:35}]}>Address (optional)</Text>
            <View style={styles.action}>
                <TextInput secureTextEntry={true} placeholder='your address' style={styles.textInput}></TextInput>
            </View>
            <View style={styles.button}>
                <Button title='Sign Up'/>
            </View>
            <View style={styles.signUpButton}>
                <Button title='Login' onPress={() => navigation.navigate('LoginScreen')} />
            </View>
        </View>
    </View>
    );
};

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
        flex: 25,
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

export default RegistrationScreen;