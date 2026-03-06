const TransactionForm = ({
  name,
  setName,
  amount,
  setAmount,
  onSubmit,
  isEditing,
}) => {
  return (
    <form className="flex flex-col w-full gap-3" onSubmit={onSubmit}>
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
        {isEditing ? "Update" : "Add transaction"}
      </button>
    </form>
  );
};

export default TransactionForm;
