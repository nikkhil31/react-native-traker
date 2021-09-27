import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Transactions = () => {
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
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.tdText}>Home Maintenance</Text>
          <Text style={styles.tdText}>10,000</Text>
        </View>
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
