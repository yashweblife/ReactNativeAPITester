import { FontAwesome } from "@expo/vector-icons";
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
    fetch(`http://${urlValue}.local:80/`)
      .then((res: Response) => res.json())
      .then((data: any) => {
        setter(data.commands);
        console.log(data.commands);
      });
  };
  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Enter URL"
        style={{
          color: "white",
          paddingHorizontal: 32,
          paddingVertical: 16,
          fontSize: 24,
          width: "100%",
          backgroundColor: "#323232",
          borderRadius: 8,
        }}
        placeholderTextColor={"#cccccc"}
        onChangeText={inputHandler}
      ></TextInput>
      <TouchableHighlight
        style={{
          width: "100%",
          marginTop: 16,
        }}
        onPress={handleAdd}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 32,
            paddingVertical: 8,
            backgroundColor: "#aadaff",
            borderRadius: 8,
          }}
        >
          <FontAwesome name="plus" size={32} color="white"></FontAwesome>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              marginLeft: 16,
            }}
          >
            Add
          </Text>
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
});
