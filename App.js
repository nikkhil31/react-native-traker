import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Block from "./componants/Block";
import BottomButton from "./componants/BottomButton";
import Header from "./componants/Header";
import Transactions from "./componants/Transactions";
import AddForm from "./componants/AddForm";
import { TransactionProvider } from "./context/transactionProvider";

export default function App() {
  // ref
  const bottomSheetRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ["50%", "70%"], []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index === -1) return Keyboard.dismiss();
  }, []);

  const handlePress = () => bottomSheetRef.current.snapToIndex(0);

  return (
    <TransactionProvider>
      <Header />
      <View style={styles.blocks}>
        <Block />
        <Block />
      </View>
      <Transactions />
      <BottomButton onPress={() => handlePress()} />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        keyboardBehavior="extend"
      >
        <AddForm />
      </BottomSheet>

      <StatusBar style="auto" />
    </TransactionProvider>
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
