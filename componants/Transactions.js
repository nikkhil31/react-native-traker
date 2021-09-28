import React from "react";
import NumberFormat from "react-number-format";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTransaction } from "../context/transactionProvider";

const Transactions = () => {
  const { transactions, numberFormat } = useTransaction();

  return (
    <>
      <View style={styles.historyWrapper}>
        <Text style={styles.history}>History</Text>
      </View>
      <ScrollView>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.thText}>Name</Text>
          <Text style={styles.thText}>Rupees</Text>
        </View>
        {transactions.map((item) => (
          <View style={styles.tableTextWrapper}>
            <Text style={styles.tdText}>{item.title}</Text>
            <NumberFormat
              value={item.amount}
              className="foo"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rs "}
              renderText={(value, props) => (
                <Text style={styles.tdText} {...props}>
                  {value}
                </Text>
              )}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  historyWrapper: {
    padding: 16,
    backgroundColor: "#0477BF",
  },

  history: {
    fontSize: 20,
    color: "#fff",
  },

  tableTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
  thText: {
    fontSize: 18,
    color: "#3B5A88",
  },
  tdText: {
    fontSize: 15,
  },
});
