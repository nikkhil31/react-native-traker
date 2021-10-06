import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTransaction } from "../context/transactionProvider";
import Block from "./Block";

const Blocks = () => {
  const { income, expend } = useTransaction();

  return (
    <>
      <Block text={"Income"} amount={income} />
      <Block text={"Expend"} amount={expend} />
    </>
  );
};

export default Blocks;

const styles = StyleSheet.create({});
