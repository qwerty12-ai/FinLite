export default function RoleInfo({ role }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                Current role: {" "}
                <span className="font-semibold text-indigo-600">{role}</span>
            </p>
            {
                role === "admin" && (
                    <>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <button className="w-full sm:w-auto mt-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">
                            + Add Transaction
                        </button>
                        <button className="w-full sm:w-auto mt-2 px-3 py-2 bg-red-600 text-white rounded-md text-sm">
                            - Delete Transaction
                        </button>
                    </div>
                    </>
                )
            }
        </div>
    )
}