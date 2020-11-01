import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import Lightbox from 'react-native-lightbox';

export default class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.clickDetails = this.clickDetails.bind(this);
    }

    clickDetails(){
        this.props.navigation.navigate("ProductDetailsScreen",
            {
                id:this.props.item.id,
                name:this.props.item.name,
                price:this.props.item.price,
                image:this.props.item.image,
                quantity:this.props.item.quantity
            });
    }

    render(){
        return (
            <View style={styles.container}>
            <View style={styles.cardsWrapper}>
            <TouchableOpacity onPress={this.clickDetails}>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                    <Lightbox style = {{flex: 1}} >
                        <Image
                        source={{ uri: this.props.item.image }}
                        resizeMode="cover"
                        style={styles.cardImg}
                        />
                        </Lightbox>
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>{this.props.item.name}</Text>
                        <Text style={styles.cardDetails}>{this.props.item.price} HUF</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TOStyle}>
                <Image
                    source={{ uri: 'https://w0.pngwave.com/png/317/428/shopping-cart-computer-icons-add-to-cart-button-png-clip-art.png' }}
                    style={styles.cart}
                />
            </TouchableOpacity>
        </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
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
      TOStyle: {
          position: 'absolute',
          width: 75,
          height: 75,
          alignItems: 'center',
          justifyContent: 'center',
          right: 30,
          bottom: 30
      },
});