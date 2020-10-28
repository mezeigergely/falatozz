import React from 'react';
import 'react-native-gesture-handler';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Lightbox from 'react-native-lightbox';

const cartHandler = () => {
    alert('Item added')
}

export const ProductsScreen = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.cardsWrapper}>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                        <Lightbox style = {{flex: 1}} >
                            <Image
                            source={require('../assets/hamburger.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                            />
                            </Lightbox>
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Hamburger</Text>
                            <Text style={styles.cardDetails}>
                            1.500 HUF
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={cartHandler}>
                    <Image
                        source={{ uri: 'https://w0.pngwave.com/png/317/428/shopping-cart-computer-icons-add-to-cart-button-png-clip-art.png' }}
                        style={styles.cart}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper}>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                            source={require('../assets/hamburger.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                            />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Hamburger</Text>
                            <Text style={styles.cardDetails}>
                            1.500 HUF
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={cartHandler}>
                    <Image
                        source={{ uri: 'https://w0.pngwave.com/png/317/428/shopping-cart-computer-icons-add-to-cart-button-png-clip-art.png' }}
                        style={styles.cart}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
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
  });

  export default ProductsScreen;