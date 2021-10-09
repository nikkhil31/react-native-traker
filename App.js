import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomButton from "./componants/BottomButton";
import Header from "./componants/Header";
import Transactions from "./componants/Transactions";
import AddForm from "./componants/AddForm";
import { TransactionProvider } from "./context/transactionProvider";
import Blocks from "./componants/Blocks";

export default function App() {

  const [snap, setSnap] = useState(-1)
  const [keyboardStatus, setKeyboardStatus] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  // ref
  const bottomSheetRef = useRef(null);
  // variables

  const snapPoints = useMemo(() => ["50%","70%"], []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index === -1) return Keyboard.dismiss();
    if (index === 0) return Keyboard.dismiss();
    setSnap(index)
  }, []);

  const handlePress = (index = 0) => bottomSheetRef.current.snapToIndex(index);

  const handleClose = () => bottomSheetRef.current.close();

  useEffect(() => {
   const showKeybord = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(1));
   const hideKeybord = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(0));

    // cleanup function
    return () => {
      showKeybord.remove()
      hideKeybord.remove()
    };
  }, []);

  useEffect(() => {
    console.log('abc----->',keyboardStatus)
    console.log('snap---->',snap)

    if(keyboardStatus === 1) {
      handlePress(1)
    } else if(keyboardStatus === 0 && !isSubmitted) {
      handlePress(0)
    }

  }, [keyboardStatus])

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
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        <AddForm handleClose={handleClose} isSubmitted={setIsSubmitted} />
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
