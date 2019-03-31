import React from "react";
import { StyleSheet, View } from "react-native";
import Photo from "./Photo";
import InfoGame from "./InfoGame";
import Player from "./Player";
import PlayerInfo from "./PlayerInfo";
import ContainerPlayerInfo from "./ContainerPlayerInfo";
import ContainerInfoGame from "./ContainerInfoGame";

const Card = props => {
  const { picture, data } = props.item;
  return (
    <View style={styles.card}>
      <View style={styles.containerGame}>
        <Photo picture={picture} />
        <ContainerInfoGame>
          <InfoGame title={"Rank"} value={data.rank} />
          <InfoGame title={"Points"} value={data.points} />
        </ContainerInfoGame>
      </View>
      <View style={styles.containerPlayer}>
        <View style={{ flex: 1 }}>
          <Player item={props.item} />
          <ContainerPlayerInfo>
            <PlayerInfo title={"Age"} value={data.age} />
            <PlayerInfo title={"Weight"} value={`${data.weight / 1000} kg`} />
            <PlayerInfo title={"Height"} value={`${data.height} cm`} />
          </ContainerPlayerInfo>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  containerPlayer: { paddingTop: 20, flex: 1, flexDirection: "row" },
  containerGame: { flexDirection: "row", flex: 1 },
  card: {
    height: "45%",
    width: "90%",
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 }
  }
});
