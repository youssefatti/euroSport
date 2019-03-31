import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InfoGame = props => {
  const { title, value } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{value}</Text>
    </View>
  );
};

export default InfoGame;

const styles = StyleSheet.create({
  container: { flexDirection: "row", flex: 1, justifyContent: "space-between" },
  title: { fontSize: 25, fontWeight: "bold" },
  info: { fontSize: 25 }
});
