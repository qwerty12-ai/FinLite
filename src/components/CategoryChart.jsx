import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";

const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#3b82f6"];

export default function CategoryChart({ data }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Spending Breakdown</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">This chart shows how your expenses are distributed across categories—bigger slices mean more spending in that category.</p>
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="category"
                            outerRadius={90}
                            labelLine={false}
                            label={({ value }) => `₹${value.toFixed(0)}`}
                            isAnimationActive={true}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value, name) => [`₹${value.toFixed(2)}`, name]} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}