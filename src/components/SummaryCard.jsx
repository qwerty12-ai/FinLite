export default function SummaryCard({ totalIncome, totalExpense, balance }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition duration-200">
                <h2 className="text-sm text-gray-600 dark:text-gray-300">Total Income</h2>
                <p className="text-2xl font-bold">₹{totalIncome.toFixed(2)}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition duration-200">
                <h2 className="text-sm text-gray-600 dark:text-gray-300">Total Expense</h2>
                <p className="text-2xl font-bold">₹{totalExpense.toFixed(2)}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition duration-200">
                <h2 className="text-sm text-gray-600 dark:text-gray-300">Balance</h2>
                <p className="text-2xl font-bold">₹{balance.toFixed(2)}</p>
            </div>
        </div>
    )
}