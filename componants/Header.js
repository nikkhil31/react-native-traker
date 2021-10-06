import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import NumberFormat from "react-number-format";
import { useTransaction } from "../context/transactionProvider";

const Header = () => {
  const { currentAmount } = useTransaction();
  console.log("current amount--->", currentAmount);
  return (
    <View style={styles.header}>
      <Text style={styles.balText}>Current Balance</Text>
      <NumberFormat
        value={currentAmount}
        displayType={"text"}
        thousandSeparator={true}
        thousandsGroupStyle="lakh"
        prefix={"₹"}
        renderText={(value, props) => (
          <Text style={styles.balText} {...props}>
            {value}
          </Text>
        )}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#0477BF",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    marginTop: StatusBar.currentHeight,
    // paddingBottom: 23,
  },
  balText: {
    fontSize: 20,
    color: "#fff",
  },
});
