import React from "react";
import { useExpenses } from "./hooks/useExpenses";
import HistoryList from "./components/HistoryList";
import TransactionForm from "./components/TransactionForm";
import { convertToCSV, downloadCSV } from "./utils/csvHelpers";

const App = () => {
  const {
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
  } = useExpenses();

  function exportCSV() {
    const csv = convertToCSV(expenses, income, expense, balance);
    downloadCSV(csv, "expense-tracker.csv");
  }

  return (
    <div className="bg-gray-100 h-screen">
      <main className="flex w-full items-center flex-col">
        <section className="flex w-87.5 flex-col ">
          <h1 className="text-xl mb-3 font-semibold mt-3">Expense Tracker</h1>

          <h3 className="mb-2">
            Your Balance: <br />
            <span className="text-3xl font-semibold">
              ${balance ? balance.toFixed(2) : "0.00"}
            </span>
          </h3>

          <div className="items-center flex bg-white p-3 justify-evenly mb-4 mt-2">
            <div className="flex w-1/2 items-center flex-col border-r border-gray-300">
              <p className="text-sm uppercase">Income</p>
              <p className="font-semibold text-lg text-green-500">
                ${income ? income.toFixed(2) : "0.00"}
              </p>
            </div>
            <div className="flex items-center flex-col w-1/2">
              <p className="uppercase text-sm">Expense</p>
              <p className="text-red-500 text-lg font-semibold">
                ${expense ? Math.abs(expense).toFixed(2) : "0.00"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="border-b pb-2 flex justify-between border-gray-300">
              <h3 className="text-lg font-semibold">History</h3>
              <button
                className="text-xs border border-gray-500 px-2 hover:bg-purple-500 hover:text-white hover:border-none"
                onClick={exportCSV}
              >
                Download CSV
              </button>
            </div>

            <HistoryList
              expenses={expenses}
              onDelete={deleteExpense}
              onEdit={startEdit}
            />
          </div>

          <TransactionForm
            name={name}
            setName={setName}
            amount={amount}
            setAmount={setAmount}
            onSubmit={addExpense}
            isEditing={!!editId}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
