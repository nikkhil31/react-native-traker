import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TransactionContext = React.createContext();

export function useTransaction() {
  return useContext(TransactionContext);
}

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const addTransactions = async (title, amount) => {
    try {
      console.log(title + "," + amount);
      setTransactions([...transactions, { title, amount }]);
      await AsyncStorage.setItem(
        "@expenseTracker",
        JSON.stringify([...transactions, { title, amount }])
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const addStoredTransactions = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@expenseTracker");
      console.log("storedValue", jsonValue);
      return jsonValue != null && setTransactions(JSON.parse(jsonValue));
    } catch (e) {
      alert(error.message);
    }
  };

  const currentAmount = transactions.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expend = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransactions,
        currentAmount,
        income,
        expend,
        addStoredTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
