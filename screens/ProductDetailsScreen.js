import React from 'react';
import {SafeAreaView,
    View, 
    StyleSheet,
    Button
 } from 'react-native';
import Item from "../component/Item";

export const ProductDetailsScreen = ({ route, navigation: { goBack } }) => {
    
    const product = route.params;

    return (
        <SafeAreaView>
            <Item
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            />
            <View style={styles.button}>
                <Button title='Back' onPress={() => goBack()} />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signUpButton: {
        alignItems: 'center',
        marginTop: 20,
    },

    quantityButton: {
        paddingHorizontal:8, 
        fontWeight:'bold', 
        fontSize:50, 
        textAlign: 'center'
    },

    quantityStyle: {
        paddingHorizontal:8,
        fontWeight:'bold',
        fontSize:30
    }

    

});

export default ProductDetailsScreen;