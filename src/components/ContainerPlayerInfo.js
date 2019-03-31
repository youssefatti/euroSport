import React from "react";
import { StyleSheet, View } from "react-native";

const ContainerPlayerInfo = props => {
  return <View style={styles.container}>{props.children}</View>;
};

export default ContainerPlayerInfo;

const styles = StyleSheet.create({
  container: { flex: 2, flexDirection: "row", justifyContent: "space-around" }
});
