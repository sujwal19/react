import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/" : "http://localhost:5000",
});

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransaction();
  }, []);

  async function getTransaction() {
    try {
      const res = await api.get("/api/v1/transactions");
      setExpenses(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error(
        "Error fetching transactions",
        err.response?.data?.error || err.message,
      );
    }
  }

  async function addExpense(e) {
    e.preventDefault();
    if (!name || !amount) return;

    const transactionData = {
      text: name,
      amount: Number(amount),
    };

    try {
      if (editId) {
        const res = await api.put(
          `/api/v1/transactions/${editId}`,
          transactionData,
        );
        setExpenses(
          expenses.map((exp) => (exp._id === editId ? res.data.data : exp)),
        );

        setEditId(null);
      } else {
        const res = await api.post("/api/v1/transactions", transactionData);
        setExpenses([res.data.data, ...expenses]);
      }
      setAmount("");
      setName("");
    } catch (err) {
      console.error(err.response?.data?.error || "Server Error");
      alert(
        err.response?.data?.error ||
          "Something went wrong adding the transaction.",
      );
    }
  }

  async function deleteExpense(id) {
    try {
      await api.delete(`/api/v1/transactions/${id}`);
      setExpenses(expenses.filter((exp) => exp._id !== id));
    } catch (err) {
      console.error("Delete Failed:", err);
    }
  }

  function startEdit(expense) {
    setName(expense.text);
    setAmount(expense.amount);
    setEditId(expense._id);
  }

  // Calculations

  const expense = expenses
    .filter((exp) => exp.amount < 0)
    .reduce((sum, exp) => sum + exp.amount, 0);

  const income = expenses
    .filter((exp) => exp.amount > 0)
    .reduce((sum, exp) => sum + exp.amount, 0);

  const balance = income + expense;

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
    loading,
  };
};
