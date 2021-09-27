import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Block from "./componants/Block";
import BottomButton from "./componants/BottomButton";
import Header from "./componants/Header";
import Transactions from "./componants/Transactions";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <View style={styles.blocks}>
        <Block />
        <Block />
      </View>
      <Transactions />
      <BottomButton />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  blocks: {
    marginHorizontal: 18,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
