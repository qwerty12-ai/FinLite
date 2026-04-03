import { transactions } from "../data/transactions";
import { useState } from "react";
import BalanceChart from "../components/BalanceChart";
import CategoryChart from "../components/CategoryChart";
import TransactionsTable from "../components/TransactionsTable";
import Filters from "../components/Filters";
import SummaryCard from "../components/SummaryCard";
import Insights from "../components/Insights";
import RoleInfo from "../components/RoleInfo";
import SearchSort from "../components/SearchSort";

function Dashboard({ role }) {
    // state created for searching 
    const [search, setSearch] = useState("");

    // state created for sorting
    const [sortOrder, setSortOrder] = useState("none");

    // state created for filters
    const [filter, setFilter] = useState("all");

    // filtering logic
    const filteredTransactions = filter === "all" ? transactions : transactions.filter((t) => t.type === filter);

    // sorting transactions
    const sortedTransactions = [...filteredTransactions].sort((a,b) => new Date(a.date) - new Date(b.date));

    // calculate total income, expense and balance
    const totalIncome = filteredTransactions.filter((t) => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = filteredTransactions.filter((t) => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpense;

    // prepare data for balance chart
    const chartData = []
    let runningBalance = 0;

    sortedTransactions.forEach((t) => {
        if (t.type === "income") {
            runningBalance += t.amount;
        } else {
            runningBalance -= t.amount;
        }

        chartData.push({ date: t.date.slice(5), balance: runningBalance })
    })

    // prepare data for category chart
    const categoryMap = {};

    sortedTransactions.forEach((t) => {
        if (t.type === "expense") {
            if (!categoryMap[t.category]) {
                categoryMap[t.category] = 0;
            }
            categoryMap[t.category] += t.amount;
        }
    })

    const pieData = Object.keys(categoryMap).map((key) => ({
        category: key,
        value: categoryMap[key]
    }))

    // search
    const searchedTransactions = filteredTransactions.filter((t) => t.category.toLowerCase().includes(search.toLowerCase()))

    // sort

    let finalTransactions = [...searchedTransactions];
    if(sortOrder === "asc") {
        finalTransactions.sort((a,b) => a.amount - b.amount);
    } else if(sortOrder === "desc") {
        finalTransactions.sort((a,b) => b.amount - a.amount);
    }

    return (
        <div className="space-y-6">
            {/* summary cards */}
            <SummaryCard totalIncome={totalIncome} totalExpense={totalExpense} balance={balance} />
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <BalanceChart data={chartData} />
                {filter !== "income" && pieData.length > 0 ? (
                    <CategoryChart data={pieData} />
                ) : (
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center justify-center h-64 text-gray-400">
                        No expenses to display
                    </div>
                )}
            </div>
            {/* insights */}
            <Insights filteredTransactions={filteredTransactions} filter={filter} />
            {/* role info */}
            <RoleInfo role={role} />
            {/* filters */}
            <Filters filter={filter} setFilter={setFilter} />
            {/* search and sort */}
            <SearchSort search={search} setSearch={setSearch} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            {/* transactions table */}
            < TransactionsTable filteredTransactions={finalTransactions} />
        </div>
    )
}

export default Dashboard;