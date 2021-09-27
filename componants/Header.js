import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

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
    borderBottomEndRadius: 27,
    borderBottomStartRadius: 27,
  },
  balText: {
    fontSize: 20,
    color: "#fff",
  },
});
