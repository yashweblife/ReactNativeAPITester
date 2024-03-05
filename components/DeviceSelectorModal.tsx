import { FontAwesome } from "@expo/vector-icons";
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

export default function DeviceSelectorModal({
  setSelectedDevice,
  modalState = false,
  setModalState,
}: DeviceSelectorModalProps) {
  const devices = [
    {
      name: "Device 1",
      url: "apitester",
      info: "This is a test device to test API.",
      commands: ["on", "off", "blink"],
    },
    {
      name: "Device 2",
      url: "plantsystem",
      info: "This is a plant watering system.",
      commands: ["water-on", "water-off", "light-on", "light-off"],
    },
    {
        name: "Device 2",
        url: "plantsystem",
        info: "This is a plant watering system.",
        commands: ["water-on", "water-off", "light-on", "light-off"],
      },    {
        name: "Device 2",
        url: "plantsystem",
        info: "This is a plant watering system.",
        commands: ["water-on", "water-off", "light-on", "light-off"],
      },    {
        name: "Device 2",
        url: "plantsystem",
        info: "This is a plant watering system.",
        commands: ["water-on", "water-off", "light-on", "light-off"],
      },    {
        name: "Device 2",
        url: "plantsystem",
        info: "This is a plant watering system.",
        commands: ["water-on", "water-off", "light-on", "light-off"],
      },    {
        name: "Device 2",
        url: "plantsystem",
        info: "This is a plant watering system.",
        commands: ["water-on", "water-off", "light-on", "light-off"],
      },
  ];

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
            <TouchableHighlight style={styles.item} onPress={()=>{
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
                    return <Text style={styles.commandName}>{command}</Text>;
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
