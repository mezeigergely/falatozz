import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
    View,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import ItemsList from '../component/ItemsList';


const items = require('../data/data.json');

export const ProductsScreen = ({navigation}) => {

return(
    <SafeAreaView style={styles.container}>
            {items != null && (
                <FlatList
                    data={items}
                    renderItem={({item}) =>
                        <ItemsList item={item} navigation={navigation} />}
                />
            )}
            <View>
                <View style={styles.button}>
                    <Button title='Login' onPress={() => navigation.navigate('LoginScreen')} />
                </View>
                <View style={styles.signUpButton}>
                    <Button title='Sign Up' onPress={() => navigation.navigate('RegistrationScreen')} />
                </View>
            </View>
        </SafeAreaView>
        
        
    )
}
    


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    cart: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },

    footer: {
        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signUpButton: {
        alignItems: 'center',
        marginTop: 20,
    },
  }
);

export default ProductsScreen;