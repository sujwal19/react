import { useEffect, useState } from "react";
import { SquarePen, Trash } from "lucide-react";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);

  function addExpense(e) {
    e.preventDefault();
    // if (name == "" || amount == "") return; // same as below
    if (!name || !amount) return;
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
    };

    if (editId) {
      // update existing item
      setExpenses(
        expenses.map((exp) =>
          exp.id === editId ? { ...exp, name, amount: Number(amount) } : exp,
        ),
      );
      setEditId(null);
    } else {
      // add new item
      setExpenses([newExpense, ...expenses]);
    }

    setAmount("");
    setName("");
  }

  function deleteExpense(id) {
    const filtered = expenses.filter((exp) => exp.id != id);
    setExpenses(filtered);
  }
  function clearAll() {
    setExpenses([]);
  }
  function startEdit(expense) {
    setName(expense.name);
    setAmount(expense.amount);
    setEditId(expense.id);
  }

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

  function convertToCSV(expenses, income, expense, balance) {
    const header = "id,name,amount\n";

    const rows = expenses
      .map((exp) => `${exp.id},${exp.name},${exp.amount}`)
      .join("\n");

    const totals =
      `\n\n,,Total Income,${income.toFixed(2)}\n` +
      `,,Total Expense,${Math.abs(expense).toFixed(2)}\n` +
      `,,Balance,${balance.toFixed(2)}`;

    return header + rows + totals;
  }

  function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  }

  function exportCSV() {
    const csv = convertToCSV(expenses, income, expense, balance);
    downloadCSV(csv, "expense-tracker.csv");
  }

  return (
    <div className="bg-gray-100 h-screen">
      <main className="flex w-full items-center flex-col">
        <section className="flex w-1/4 flex-col ">
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
                className="text-xs border border-gray-500 px-2 hover:bg-purple-500 hover:text-white hover:border-none "
                onClick={exportCSV}
              >
                Download CSV
              </button>
            </div>

            <div className="max-h-53 overflow-y-auto">
              <ol className="flex flex-col justify-between">
                {expenses.map((expense) => {
                  return (
                    <li
                      key={expense.id}
                      className={`flex justify-between bg-white group px-3 border-r-5 py-2.5 mb-3 ${expense.amount > 0 ? "border-r-green-500" : "border-r-red-500"}`}
                    >
                      <div className="flex items-center gap-3">
                        <button onClick={() => deleteExpense(expense.id)}>
                          <Trash
                            size={16}
                            strokeWidth={3}
                            className=" text-gray-300 hover:text-red-500"
                          />
                        </button>
                        <p className=" capitalize">{expense.name}:</p>
                        <button
                          onClick={() => startEdit(expense)}
                          className="opacity-0 group-hover:opacity-100 "
                        >
                          <SquarePen
                            size={16}
                            strokeWidth={3}
                            className="text-gray-300 hover:text-yellow-500"
                          />
                        </button>
                      </div>

                      <p className=" flex items-center mr-2">
                        ${Math.abs(expense.amount).toFixed(2)}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <form
            className="flex flex-col w-full gap-3"
            onSubmit={(e) => addExpense(e)}
          >
            <h3 className="mt-6 text-gray-900 border-b font-semibold border-gray-400 pb-2 text-lg">
              Add new transaction
            </h3>
            <div>
              <p>Text</p>
              <input
                type="text"
                placeholder="Enter text..."
                className="border border-gray-100 w-full bg-white outline-none px-2 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="flex flex-col ">
                <p>Amount</p>
                <p className="-mt-1 mb-1 text-sm text-gray-600">
                  (negative-expense, positive-income)
                </p>
              </div>
              <input
                type="number"
                placeholder="Enter Amount..."
                className="border border-gray-100 w-full bg-white outline-none px-2 py-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <button className="bg-purple-500 w-full px-6 mt-1 text-white py-2.5">
              {editId ? "Update" : "Add transaction"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
