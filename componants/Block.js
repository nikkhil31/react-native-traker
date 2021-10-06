import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberFormat from "react-number-format";

const Block = ({ text, amount }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.wordWrapper}>
        <Text style={styles.lable}>{text}</Text>
      </View>
      <View style={styles.amountWrapper}>
        <NumberFormat
          value={amount}
          displayType={"text"}
          thousandSeparator={true}
          thousandsGroupStyle="lakh"
          prefix={"₹"}
          renderText={(value, props) => (
            <Text style={styles.amount} {...props}>
              {value}
            </Text>
          )}
        />
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
