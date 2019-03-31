import React from "react";
import { Image, StyleSheet } from "react-native";

const Photo = props => {
  const { picture } = props;
  return <Image source={{ uri: picture }} style={styles.photo} />;
};

export default Photo;

const styles = StyleSheet.create({
  photo: { width: "40%", height: "100%", borderRadius: 10 }
});
