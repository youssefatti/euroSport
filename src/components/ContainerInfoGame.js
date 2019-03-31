import React from "react";
import { StyleSheet, View } from "react-native";

const ContainerInfoGame = props => {
  return <View style={styles.container}>{props.children}</View>;
};

export default ContainerInfoGame;

const styles = StyleSheet.create({
  container: { paddingLeft: 20, paddingRight: 20, flex: 1 }
});
