import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

type URLInputProps = {
  setter: Function;
  inputHandler: (text: string) => void;
  urlValue: string;
};

export default function URLInput({
  setter,
  inputHandler,
  urlValue,
}: URLInputProps) {
  const handleAdd = () => {
    try {
      axios.get(`http://${urlValue}.local:80/`).then((res) => {
        setter(res.data.commands);
        alert(res.data.commands);
      });
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };
  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Enter URL"
        style={styles.input}
        placeholderTextColor={"#cccccc"}
        onChangeText={inputHandler}
      ></TextInput>
      <TouchableHighlight style={styles.buttonMap} onPress={handleAdd}>
        <View style={styles.acceptButton}>
          <FontAwesome name="plus" size={32} color="white"></FontAwesome>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    padding: 32,
  },
  input: {
    color: "white",
    paddingHorizontal: 32,
    paddingVertical: 16,
    fontSize: 24,
    width: "100%",
    backgroundColor: "#323232",
    borderRadius: 8,
  },
  buttonMap: {
    width: "100%",
    marginTop: 16,
  },
  acceptButton: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "#aadaff",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    marginLeft: 16,
  },
});
