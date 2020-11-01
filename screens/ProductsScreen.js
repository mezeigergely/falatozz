import React from 'react';
import 'react-native-gesture-handler';
import {
    View,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList
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
                        <ItemsList 
                        item={item} 
                        navigation={navigation} 
                        />}
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