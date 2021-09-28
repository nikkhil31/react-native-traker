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
} from "react-native";
import BottomButton from "./BottomButton";

export default function AddForm() {
  const [sign, setSign] = useState(true);

  return (
    <View style={styles.formWrapper}>
      <Text style={styles.mainTitle}>Transactions</Text>
      <View style={styles.formGroup}>
        <Text style={styles.formTitle}>Title</Text>
        <TextInput style={styles.input} />
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
          <TextInput style={[styles.input, { width: "79%" }]} />
        </View>
      </View>
      <View style={styles.formGroup}>
        <BottomButton onPress={() => Keyboard.dismiss()} />
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
