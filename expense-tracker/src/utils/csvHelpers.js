export function convertToCSV(expenses, income, expense, balance) {
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

export function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
