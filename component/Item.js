<<<<<<< HEAD
import {Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity} from "react-native";
=======
import {Image, Text, SafeAreaView, View, StyleSheet} from "react-native";
>>>>>>> 8cf333f2901209586e56a73036643f9bc3d6d37b
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
<<<<<<< HEAD
                <Text>Price:{this.props.price} HUF</Text>
             <View style={styles.horizontalLine}/>
=======
                    <Text>Price:{this.props.price} HUF</Text>
             <View/>

>>>>>>> 8cf333f2901209586e56a73036643f9bc3d6d37b
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