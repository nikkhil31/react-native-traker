import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Block = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.wordWrapper}>
        <Text style={styles.lable}>Income</Text>
      </View>
      <View style={styles.amountWrapper}>
        <Text style={styles.amount}>$ 20,000</Text>
      </View>
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  mainView: {
    width: 175,
    height: 90,
    // backgroundColor: "#0477BF",
    borderRadius: 11,
    overflow: "hidden",
  },
  wordWrapper: {
    flex: 1,
    backgroundColor: "#0477BF",
  },
  lable: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
  amountWrapper: {
    flex: 2,
    backgroundColor: "#DDEE53",
    justifyContent: "center",
  },
  amount: {
    color: "#fff",
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
