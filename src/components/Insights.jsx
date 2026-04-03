export default function Insights({filteredTransactions, filter}) {

    // preparing data for insights
        const expenseMap = {};
    
        filteredTransactions.forEach((t) => {
            if (t.type === "expense") {
                expenseMap[t.category] = (expenseMap[t.category] || 0) + t.amount;
            }
        })
    
        const highestCategory = Object.keys(expenseMap).length > 0 ? Object.keys(expenseMap).reduce((x, y) => (expenseMap[x] > expenseMap[y] ? x : y), Object.keys(expenseMap)[0]) : null;
    
        let income = 0;
        let expense = 0;
    
        filteredTransactions.forEach((t) => {
            if (t.type === "income") income += t.amount;
            else expense += t.amount;
        })

        let message = "";

        if (filter === "all") {
            message = income >= expense ? "You are saving money 💰" : "Spending is higher 🛑";
        } else {
            message = "Switch to 'All' to see overall insights";
        }

    return (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow mt-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Highest Spending */}
                {highestCategory ? (
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-xl shadow-sm hover:shadow-md transition">
                        <p className="text-sm text-gray-500">Highest Spending Category</p>
                        <h3 className="text-xl font-bold text-red-600">{highestCategory}</h3>
                        <p className="text-sm text-gray-600">₹{expenseMap[highestCategory]}</p>
                    </div>
                ) : (
                    <div className="p-4 bg-red-50 rounded-xl shadow-sm flex items-center justify-center text-gray-400">
                        No expense data for this filter
                    </div>
                )}
                {/* Income vs Expense */}
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="text-sm text-gray-500">Income vs Expense</p>
                    <h3 className="text-xl font-bold text-indigo-600">₹{income.toFixed(2)} vs ₹{expense.toFixed(2)}</h3>
                    <p className="text-sm text-gray-600">{message}</p>
                </div>
            </div>
        </div>
    )
} 