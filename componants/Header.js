import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.balText}>Current Balance</Text>
      <Text style={styles.balText}>$ 30,000</Text>
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
