import React, { useContext, useState } from "react";

const TransactionContext = React.createContext();

export function useTransaction() {
  return useContext(TransactionContext);
}

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
    { title: "asdasfada", amount: 30000 },
  ]);

  const addTransactions = (title, amount) =>
    setTransactions([...transactions, ...[title, amount]]);

  const currentAmount = () => {
    return 30000;
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransactions, currentAmount, numberFormat }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
