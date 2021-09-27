import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomButton = () => {
  return (
    <TouchableOpacity style={styles.btnWrapper}>
      <Text style={styles.btnText}>Add Transition</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: "#0477BF",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
  },
});
