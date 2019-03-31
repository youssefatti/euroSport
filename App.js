import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import Card from "./src/components/Card";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentWillMount() {
    axios
      .get(
        "https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json"
      )
      .then(res => {
        this.setState({ data: res.data.players });
      })
      .catch(err => {
        console.log("err : ", err);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
