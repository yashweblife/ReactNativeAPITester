import axios from "axios";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";



export default function CommandList({ list, urlInput }: CommandListProps) {
  const handleClick = (data: string) => {
    try {
      axios.get(`http://${urlInput}.local:80/${data}`);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      {list.length > 0 &&
        list.map((command: CommandData) => (
          <TouchableHighlight
            key={command.name}
            onPress={() => handleClick(command.name)}
            style={styles.list}
            onLongPress={() => alert(command.info)}
          >
            <Text style={styles.text}>{command.name.toUpperCase()}</Text>
          </TouchableHighlight>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  list: {
    width: "100%",
    flex: 1,
    padding: 8,
    margin: 4,
    alignItems: "center",
    backgroundColor: "#aadaff",
    borderRadius: 5,
  },
  text: { fontSize: 24, color: "white" },
});
