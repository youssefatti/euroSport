import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlayerInfo = props => {
  const { title, value } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default PlayerInfo;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  title: { fontSize: 16, fontWeight: "bold" }
});
