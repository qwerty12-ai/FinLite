export default function TransactionsTable({ filteredTransactions }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition duration-200 overflow-x-auto">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Transactions</h2>

                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                            <th className="py-2">Date</th>
                            <th className="py-2">Category</th>
                            <th className="py-2">Type</th>
                            <th className="text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length === 0 ? (<tr>
                            <td colSpan="4" className="text-center py-4 text-gray-500 dark:text-gray-300">
                                No transactions found for the selected filter.
                            </td>
                        </tr>):(filteredTransactions.map((t) => (
                            <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700" key={t.id}>
                                <td className="py-2">{t.date}</td>
                                <td className="py-2">{t.category}</td>
                                <td className={t.type === "income" ? "text-green-500": "text-red-500"}>{t.type}</td>
                                <td className="text-right font-medium">₹{t.amount.toFixed(2)}</td>
                            </tr>
                        )))}
                    </tbody>
                </table>

            </div>
    )
}