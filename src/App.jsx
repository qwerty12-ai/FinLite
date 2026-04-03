import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import { FaUser, FaUserShield, FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [role, setRole] = useState("viewer");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">

      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 bg-white dark:bg-gray-800 shadow">
        
        <h1 className="text-lg sm:text-xl font-bold text-indigo-600 flex items-center gap-2">
          FinLite
        </h1>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          
          <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1 flex-1 sm:flex-none">
            
            <button
              onClick={() => setRole("viewer")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition ${
                role === "viewer"
                  ? "bg-white dark:bg-gray-900 shadow text-indigo-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <FaUser />
              <span className="hidden sm:inline">Viewer</span>
            </button>

            <button
              onClick={() => setRole("admin")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition ${
                role === "admin"
                  ? "bg-white dark:bg-gray-900 shadow text-indigo-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <FaUserShield />
              <span className="hidden sm:inline">Admin</span>
            </button>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 sm:px-4 py-2 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center gap-2"
          >
            {dark ? (<><FaSun /> Light</>) : (<><FaMoon /> Dark</>)}
          </button>
        </div>
      </nav>

      <main>
        <div className="grid p-6">
          <Dashboard role={role} />
        </div>
      </main>

      <footer className="text-center text-sm text-indigo-600 dark:text-gray-400 py-4">
        &copy; 2026 FinLite. All rights reserved.
      </footer>
    </div>
  );
}

export default App;