import { FontAwesome } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { DeviceContext } from "../context/deviceContext";

export default function DeviceSelectorModal({
  setSelectedDevice,
  modalState = false,
  setModalState,
}: DeviceSelectorModalProps) {
  
  const [devices, setDevices] = useState([] as DeviceData[])
  const dc = useContext(DeviceContext)
  useEffect(()=>{
    for(let i=0;i<10;i++){
      dc.addDevice({
        name: `Device ${i}`,
        url: "http://apitester.local:80",
        info: "This is a test device",
        commands: ["on", "off", "blink"],
      })
      setDevices(dc.list)
    }
  },[])

  return (
    <Modal visible={modalState} style={styles.modal}>
      <View style={styles.header}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
          }}
        >
          Select A Device
        </Text>
        <FontAwesome
          color="white"
          name="close"
          onPress={() => {
            setModalState(false);
          }}
          size={24}
        ></FontAwesome>
      </View>
      <View style={styles.content}>
        <ScrollView>
        {devices.map((device) => {
          return (
            <TouchableHighlight key={Date.now()} style={styles.item} onPress={()=>{
                setSelectedDevice(device);
                setModalState(false);
            }}>
              <View>
                <Text style={{ color: "white", fontSize: 16 }}>
                  {device.name.toUpperCase()}
                </Text>
                <Text style={{ color: "white" }}>{device.url}</Text>
                <Text style={{ color: "white" }}>{device.info}</Text>
                <View
                  style={styles.commandList}
                >
                  {device.commands.map((command) => {
                    return <Text style={styles.commandName}>{command.toUpperCase()}</Text>;
                  })}
                </View>
              </View>
            </TouchableHighlight>
          );
        })}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#222222",
    height: "100%",
    padding: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingHorizontal: 32,
    backgroundColor: "#444444",
    color: "white",
  },
  content: {
    height: "100%",
    backgroundColor: "#222222",
    flexDirection: "column",
    padding: 16,
    paddingBottom:64,
  },
  item: {
    backgroundColor: "#444444",
    marginVertical: 16,
    borderRadius: 10,
    padding: 16,
  },
  commandList:{
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  commandName: {
    color: "black",
    borderRadius: 50,
    alignItems: "center",
    margin: 5,
    fontSize: 14,
    backgroundColor: "#99ffff",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
