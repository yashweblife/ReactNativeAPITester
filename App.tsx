import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AIVHeader from "./components/AIVHeader";
import CommandList from "./components/CommandList";
import DeviceSelectorModal from "./components/DeviceSelectorModal";
import URLInput from "./components/URLInput";
import DeviceContextProvider from "./context/deviceContext";

export default function App() {
  const [urlInput, setUrlInput] = useState("apitester");
  const [commands, setCommands] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState({} as DeviceData);
  
  return (
    <DeviceContextProvider>
      <View style={styles.container}>
        <DeviceSelectorModal setSelectedDevice={setSelectedDevice} modalState={modalState} setModalState={setModalState}></DeviceSelectorModal>
        <AIVHeader setModalState={setModalState}/>
        <URLInput
          urlValue={urlInput}
          setCommands={setCommands}
          inputHandler={setUrlInput}
        ></URLInput>
        <CommandList list={commands} urlInput={urlInput}></CommandList>
      </View>
    </DeviceContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#222222",
    alignItems: "center",
    color: "white",
    flex: 1,
  },
});
