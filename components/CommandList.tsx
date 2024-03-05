import { Text, TouchableHighlight, View } from "react-native";

type CommandListProps = {
  list: string[];
  urlInput: string;
};

export default function CommandList({ list, urlInput }: CommandListProps) {
  return (
    <View
      style={{
        width: "100%",
        padding: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {list.length > 0 &&
        list.map((command: string) => (
          <TouchableHighlight
            key={command}
            onPress={() => {
              fetch(`http://${urlInput}.local:80/${command}`);
            }}
            style={{
              width: "100%",
              flex: 1,
              padding: 8,
              margin: 4,
              alignItems: "center",
              backgroundColor: "#aadaff",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 24, color: "white" }}>
              {command.toUpperCase()}
            </Text>
          </TouchableHighlight>
        ))}
    </View>
  );
}
