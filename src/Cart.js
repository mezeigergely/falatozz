import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
var { width } = Dimensions.get("window")


export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dataCart:[],
        };
    }

    componentDidMount()
    {
        AsyncStorage.getItem('cart').then((cart)=>{
            if (cart !== null) {
            const cartfood = JSON.parse(cart)
            this.setState({dataCart:cartfood})
            }
        }
        )
        .catch((err)=>{
            alert(err)
            }
        )
    }

    onChangeQual(i,type)
    {
        const dataCar = this.state.dataCart
        let cantd = dataCar[i].quantity;

        if (type)
        {
            cantd = cantd + 1
            dataCar[i].quantity = cantd
            this.setState({dataCart:dataCar})
        }
        else if (type==false&&cantd>=2)
        {
            cantd = cantd - 1
            dataCar[i].quantity = cantd
            this.setState({dataCart:dataCar})
        }
        else if (type==false&&cantd==1)
        {
            dataCar.splice(i,1)
            this.setState({dataCart:dataCar})
        }
        AsyncStorage.removeItem('cart');
        AsyncStorage.setItem('cart', JSON.stringify(dataCar)); 
    }

    checkOut()
    {
        alert("Thank you for your purchase!");
        AsyncStorage.removeItem('cart');

    }

    totalPrice() {
        let total = 0;

        for (let i = 0; i < this.state.dataCart.length; i++) {
            total += this.state.dataCart[i].price * this.state.dataCart[i].quantity;
        }
        return total;
    }

    render() 
    {
        return (
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height:20}} />
                    <Text style={styles.titleStyle}>Cart food</Text>
                <View style={{height:10}} />
                <View style={{flex:1}}>
                    <ScrollView>
                        {this.state.dataCart.map((item,i)=>{
                            return (
                                    <View style={styles.container}>

                                        <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.food.image}}/>
                                        
                                        <View style={styles.foodName}>
                                            <View>
                                                <Text style={styles.foodName}>{item.food.name}</Text>
                                            </View>
                                            <View style={styles.tempPrice}>
                                                <Text style={styles.tempPrice}>${item.price*item.quantity}</Text>
                                                <View style={styles.quantityCircle}>
                                                    <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                                                        <Icon name="ios-remove-circle" size={35} color={"#33c37d"} />
                                                    </TouchableOpacity>
                                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                                    <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                                                        <Icon name="ios-add-circle" size={35} color={"#33c37d"} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                    )
                                }   
                            )
                        }
                        <View style={{height:20}} />
                        <Text style={styles.foodName}>Total: {this.totalPrice()} HUF</Text>
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutText} onPress={ () => this.checkOut()}>CHECKOUT</Text>
                        </TouchableOpacity>
                        <View style={{height:20}} />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        titleStyle:
        {
            fontSize:32,
            fontWeight:"bold",
            color:"#33c37d"
        },

        container:
        {
            width:width-20,
            margin:10,
            backgroundColor:'transparent', 
            flexDirection:'row', 
            borderBottomWidth:2, 
            borderColor:"#cccccc", 
            paddingBottom:10
        },

        foodName:
        {
            flex:1, 
            backgroundColor:'transparent', 
            padding:10, 
            justifyContent:"space-between",
            fontWeight:"bold", 
            fontSize:20
        },

        tempPrice:
        {
            flexDirection:'row',
            justifyContent:'space-between',
            fontWeight:'bold',
            color:"#33c37d",
            fontSize:20
        },

        quantityCircle:
        {
            flexDirection:'row',
            alignItems:'center'
        },

        quantityText:
        {
            paddingHorizontal:8,
            fontWeight:'bold',
            fontSize:18
        },

        checkoutButton:
        {
            backgroundColor:"#33c37d",
            width:width-40,
            alignItems:'center',
            padding:10,
            borderRadius:5,
            margin:20
        },

        checkoutText:
        {
            fontSize:24,
            fontWeight:"bold",
            color:'white'
        }
    }
)

