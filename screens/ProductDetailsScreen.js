import React from 'react';
import {SafeAreaView,
    View, 
    StyleSheet,
    Button,
    Text,
    TouchableOpacity
 } from 'react-native';
import Item from "../component/Item";

export const ProductDetailsScreen = ({ route, navigation: { goBack } }) => {
    
    const product = route.params;


    const onChangeQual = (type) => {
        if(type){
            {product.quantity-1}
        }
        else
        {
            {product.quantity+1}
        }
    };

    return (
        <SafeAreaView>
            <Item
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            />
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity>
                    <Text style={styles.quantityButton} onPress={onChangeQual(false)}>-</Text>
                </TouchableOpacity>
                    <Text style={styles.quantityStyle}>{product.quantity}</Text>
                <TouchableOpacity>
                    <Text style={styles.quantityButton} onPress={onChangeQual(true)}>+</Text>
                </TouchableOpacity>
                </View>
            </View>
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