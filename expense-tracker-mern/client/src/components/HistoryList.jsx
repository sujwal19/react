import React from "react";
import { SquarePen, Trash } from "lucide-react";

const HistoryList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div className="overflow-y-auto">
      <ol className="flex flex-col justify-between">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className={`flex justify-between bg-white group px-3 border-r-5 py-2.5 mb-3 ${
              expense.amount > 0 ? "border-r-green-500" : "border-r-red-500"
            }`}
          >
            <div className="flex items-center gap-3">
              <button onClick={() => onDelete(expense.id)}>
                <Trash
                  size={16}
                  strokeWidth={3}
                  className="text-gray-300 hover:text-red-500"
                />
              </button>
              <p className="capitalize">{expense.name}:</p>
              <button
                onClick={() => onEdit(expense)}
                className="opacity-0 group-hover:opacity-100"
              >
                <SquarePen
                  size={16}
                  strokeWidth={3}
                  className="text-gray-300 hover:text-yellow-500"
                />
              </button>
            </div>
            <p className="flex items-center mr-2">
              {expense.amount > 0 ? "+" : "-"}$
              {Math.abs(expense.amount).toFixed(2)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HistoryList;
