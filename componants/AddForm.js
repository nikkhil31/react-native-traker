import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Alert,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useTransaction } from "../context/transactionProvider";
import BottomButton from "./BottomButton";

export default function AddForm({ handleClose }) {
  const { addTransactions } = useTransaction();

  const [sign, setSign] = useState(true);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();

  const handleOnPress = () => {
    let fAmount = Number((sign ? 1 : -1) * amount);
    addTransactions(title, fAmount);
    setTitle("");
    setAmount();
    handleClose();
  };

  return (
    <View style={styles.formWrapper}>
      <Text style={styles.mainTitle}>Transactions</Text>
      <View style={styles.formGroup}>
        <Text style={styles.formTitle}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formTitle}>Amount</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              width: "18%",
              borderWidth: 1,
              borderColor: "#aaa",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setSign(!sign)}
          >
            <Text style={{ fontSize: 25, color: "#000" }}>
              {sign ? "+" : "-"}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input, { width: "79%" }]}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.formGroup}>
        <BottomButton onPress={() => handleOnPress()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    margin: 12,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "200",
    color: "#0477BF",
    marginBottom: 25,
  },
  formGroup: {
    marginBottom: 15,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "200",
    marginBottom: 10,
  },
  input: {
    height: 45,
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
