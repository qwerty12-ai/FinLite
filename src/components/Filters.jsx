export default function Filters({filter, setFilter}) {
    return (
        <div className="flex gap-2 flex-wrap">
            <button onClick={() => setFilter("all")} className={`px-3 py-1 rounded-md text-sm transition duration-200 ${filter === "all" ? "bg-indigo-600 text-white shadow" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"}`}>
                All
            </button>
            <button onClick={() => setFilter("income")} className={`px-3 py-1 rounded-md text-sm transition duration-200 ${filter === "income" ? "bg-green-500 text-white shadow" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"}`}>
                Income
            </button>
            <button onClick={() => setFilter("expense")} className={`px-3 py-1 rounded-md text-sm transition duration-200 ${filter === "expense" ? "bg-red-500 text-white shadow" : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200"}`}>
                Expense
            </button>
        </div>
    )
}