import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomButton from "./componants/BottomButton";
import Header from "./componants/Header";
import Transactions from "./componants/Transactions";
import AddForm from "./componants/AddForm";
import { TransactionProvider } from "./context/transactionProvider";
import Blocks from "./componants/Blocks";

export default function App() {
  // ref
  const bottomSheetRef = useRef(null);
  // variables

  const snapPoints = useMemo(() => ["50%", "70%"], []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index === -1) return Keyboard.dismiss();
    if (index === 0) return Keyboard.dismiss();
  }, []);

  const handlePress = () => bottomSheetRef.current.snapToIndex(0);

  const handleClose = () => bottomSheetRef.current.close();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    bottomSheetRef.current.snapToIndex(1);
  };

  const _keyboardDidHide = () => {
    bottomSheetRef.current.snapToIndex(0);
  };

  return (
    <TransactionProvider>
      <Header />
      <View style={styles.blocks}>
        <Blocks />
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
        <AddForm handleClose={handleClose} />
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
