import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function AIVHeader(){
    return(
        <View style={styles.header}>
        <FontAwesome name="bars" size={24} color="white" />
        <Text style={{
          fontSize: 32,
          color: 'white',
          alignSelf: 'center',
          marginLeft: 32,
        }}>
          AI VISION
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        paddingVertical: 32,
        paddingHorizontal: 32,
        backgroundColor: '#111111',
        alignItems: 'center',
        flexDirection: 'row',
        },
})