import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AIVHeader from "./components/AIVHeader";
import CommandList from "./components/CommandList";
import URLInput from "./components/URLInput";

export default function App() {
  const [urlInput, setUrlInput] = useState("apitester");
  const [commands, setCommands] = useState([]);
  const handleAdd = () => {
    fetch(`http://${urlInput}.local:80/`)
      .then((res: Response) => res.json())
      .then((data: any) => {
        alert(data.commands);
        setCommands(data.commands);
      });
  };
  return (
    <View style={styles.container}>
      <AIVHeader />
      <URLInput
        urlValue={urlInput}
        setter={setCommands}
        inputHandler={setUrlInput}
      ></URLInput>
      <CommandList list={commands} urlInput={urlInput}></CommandList>
    </View>
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
