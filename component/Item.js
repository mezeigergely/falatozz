import {Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity} from "react-native";
import React, {Component} from "react";

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
         <SafeAreaView>
             <Text>{this.props.name}</Text>
             <View>
                 <Image
                 style={styles.image}
                 source={{ uri: this.props.image }}/>
             </View>
                <Text>Price:{this.props.price} HUF</Text>
             <View style={styles.horizontalLine}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});