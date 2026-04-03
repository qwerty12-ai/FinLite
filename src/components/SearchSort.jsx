import { FaUser, FaUserShield } from "react-icons/fa";

export default function SearchSort({ search, setSearch, sortOrder, setSortOrder}) {
    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
            {/* search input */}
            <input
              type="text"
              placeholder="Search category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 border rounded-md w-full sm:w-64 bg-white text-gray-900 placeholder-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
            />

          {/* sort */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-3 py-2 border rounded-md w-full sm:w-40 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="none">Sort</option>
            <option value="asc">Amount ↑</option>
            <option value="desc">Amount ↓</option>
          </select>
        </div>
    )
}