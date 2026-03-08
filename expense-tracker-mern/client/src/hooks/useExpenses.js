import { useState, useEffect } from "react";
import axios from "axios";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);

  const expense = expenses
    .filter((exp) => exp.amount < 0)
    .reduce((sum, exp) => sum + exp.amount, 0);

  const income = expenses
    .filter((exp) => exp.amount > 0)
    .reduce((sum, exp) => sum + exp.amount, 0);

  const balance = income + expense;

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  async function getTransaction() {
    try {
      const res = await axios.get("/api/v1/transactions");
    } catch (err) {}
  }

  function addExpense(e) {
    e.preventDefault();
    if (!name || !amount) return;

    if (editId) {
      setExpenses(
        expenses.map((exp) =>
          exp.id === editId ? { ...exp, name, amount: Number(amount) } : exp,
        ),
      );
      setEditId(null);
    } else {
      const newExpense = { id: Date.now(), name, amount: Number(amount) };
      setExpenses([newExpense, ...expenses]);
    }
    setAmount("");
    setName("");
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  }

  function startEdit(expense) {
    setName(expense.name);
    setAmount(expense.amount);
    setEditId(expense.id);
  }

  return {
    expenses,
    name,
    setName,
    amount,
    setAmount,
    editId,
    income,
    expense,
    balance,
    addExpense,
    deleteExpense,
    startEdit,
  };
};
