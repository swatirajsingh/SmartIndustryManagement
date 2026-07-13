import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: "🏠" },
  { name: "Inventory", path: "/inventory", icon: "📦" },
  { name: "Production", path: "/production", icon: "🏭" },
  { name: "Employees", path: "/employees", icon: "👨‍🏭" },
  { name: "Orders", path: "/orders", icon: "📋" },
  { name: "Reports", path: "/reports", icon: "📊" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white shadow-xl">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">🏭 Smart Industry</h1>
        <p className="text-sm text-slate-400 mt-1">Management System</p>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 px-6 py-4 hover:bg-blue-600 transition"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;