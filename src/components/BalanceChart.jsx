import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

export default function BalanceChart({ data }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-md transition duration-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Balance Trend</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Your balance trend shows how your money moves over time—higher lines mean more savings, lower lines mean more spending.</p>

        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip />
                    <Line type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>

        </div>
    );
}