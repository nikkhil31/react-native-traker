import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import { SwipeListView } from "react-native-swipe-list-view";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTransaction } from "../context/transactionProvider";

const Transactions = () => {
  const { transactions, addStoredTransactions } = useTransaction();

  useEffect(() => {
    addStoredTransactions();
  }, []);

  return (
    <>
      <View style={styles.historyWrapper}>
        <Text style={styles.history}>History</Text>
      </View>
      <View style={styles.tableTextWrapper}>
        <Text style={styles.thText}>Name</Text>
        <Text style={styles.thText}>Rupees</Text>
      </View>
      <SwipeListView
        data={transactions}
        renderItem={(data, rowMap) => (
          <View style={styles.tableTextWrapper} key={data.index}>
            <Text style={styles.tdText}>{data.item.title}</Text>
            <NumberFormat
              value={data.item.amount}
              className="foo"
              displayType={"text"}
              thousandSeparator={true}
              thousandsGroupStyle="lakh"
              prefix={"₹"}
              renderText={(value, props) => (
                <Text style={styles.tdText} {...props}>
                  {value}
                </Text>
              )}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <TouchableOpacity style={styles.rowBack}>
            <Text></Text>
            <Text style={{ color: "#fff" }} onPress={() => alert("delete")}>
              Delete
            </Text>
          </TouchableOpacity>
        )}
        disableRightSwipe={true}
        rightOpenValue={-75}
      />

      {/* <ScrollView>
        <View style={styles.tableTextWrapper}>
          <Text style={styles.thText}>Name</Text>
          <Text style={styles.thText}>Rupees</Text>
        </View>
        {transactions.map((item, index) => (
          <View style={styles.tableTextWrapper} key={index}>
            <Text style={styles.tdText}>{item.title}</Text>
            <NumberFormat
              value={item.amount}
              className="foo"
              displayType={"text"}
              thousandSeparator={true}
              thousandsGroupStyle="lakh"
              prefix={"₹"}
              renderText={(value, props) => (
                <Text style={styles.tdText} {...props}>
                  {value}
                </Text>
              )}
            />
          </View>
        ))}
      </ScrollView> */}
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
    backgroundColor: "#fff",
  },
  thText: {
    fontSize: 18,
    color: "#3B5A88",
  },
  tdText: {
    fontSize: 15,
  },
  rowBack: {
    zIndex: -9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#da3633",
  },
});
