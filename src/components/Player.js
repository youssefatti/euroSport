import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Player = props => {
  const { firstname, lastname, country } = props.item;
  return (
    <View>
      <Text style={styles.firstname}>{firstname}</Text>
      <Text style={styles.lastname}>{lastname}</Text>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: country.picture }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  firstname: { fontSize: 18, textAlign: "center" },
  lastname: { fontSize: 25, fontWeight: "bold", textAlign: "center" },
  containerImage: { paddingTop: 10, paddingBottom: 10, alignItems: "center" },
  image: { width: 30, height: 20, borderRadius: 5 }
});
