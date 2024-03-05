import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function AIVHeader({setModalState}:{setModalState:(state:boolean) => void}){
  return (
    <View style={styles.header}>
      <FontAwesome onPress={()=>{setModalState(true)}} name="bars" size={24} color="white" />
      <Text style={styles.text}>AI VISION</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 32,
    paddingHorizontal: 32,
    backgroundColor: "#111111",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 32,
    color: "white",
    alignSelf: "center",
    marginLeft: 32,
  },
});
