import AIChat from "../components/AIChat";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import ProductionChart from "../components/ProductionChart";
import EnergyChart from "../components/EnergyChart";
import AIPanel from "../components/AIPanel";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    axios.get("https://smartindustrymanagement.onrender.com/api/dashboard")
 .then((res) => {
  console.log("Dashboard API:", res.data);
  setDashboard(res.data.data);
})
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!dashboard) {
    return <h2>Loading...</h2>;
  }


  const stats = [
    {
      title: "Active Orders",
      value: dashboard.activeOrders,
      color: "bg-blue-500",
    },
    {
      title: "Inventory Items",
      value: dashboard.inventoryItems,
      color: "bg-green-500",
    },
    {
      title: "Employees",
      value: dashboard.employees,
      color: "bg-purple-500",
    },
    {
      title: "Revenue",
      value: `₹${dashboard.revenue.toLocaleString()}`,
      color: "bg-orange-500",
    },
  ];
  
  const machines = [
  {
    name: "CNC Machine",
    status: "Running",
    efficiency: "98%",
    color: "bg-green-500",
  },
  {
    name: "Conveyor Belt",
    status: "Running",
    efficiency: "95%",
    color: "bg-green-500",
  },
  {
    name: "Packaging Unit",
    status: "Maintenance",
    efficiency: "72%",
    color: "bg-yellow-500",
  },
  {
    name: "Welding Robot",
    status: "Offline",
    efficiency: "0%",
    color: "bg-red-500",
  },
];
const inventory = [
  {
    item: "Steel Rods",
    stock: 90,
    color: "bg-green-500",
  },
  {
    item: "Iron Sheets",
    stock: 75,
    color: "bg-yellow-500",
  },
  {
    item: "Bearings",
    stock: 45,
    color: "bg-orange-500",
  },
  {
    item: "Copper Wire",
    stock: 20,
    color: "bg-red-500",
  },
];
const employees = [
  { name: "Rahul Sharma", shift: "Morning", status: "Present" },
  { name: "Priya Verma", shift: "Evening", status: "Present" },
  { name: "Amit Singh", shift: "Night", status: "On Leave" },
  { name: "Sneha Patel", shift: "Morning", status: "Present" },
];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8">
          Smart Industry Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className={`w-12 h-12 rounded-full ${item.color} mb-4`}></div>

              <h2 className="text-gray-500">{item.title}</h2>

              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <ProductionChart />
          <EnergyChart />
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Delivery</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3">#1001</td>
                  <td className="p-3">ABC Industries</td>
                  <td className="p-3">Steel Rods</td>
                  <td className="p-3 text-green-600 font-semibold">
                    Completed
                  </td>
                  <td className="p-3">12 Jul</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">#1002</td>
                  <td className="p-3">XYZ Pvt Ltd</td>
                  <td className="p-3">Machine Parts</td>
                  <td className="p-3 text-yellow-600 font-semibold">
                    In Progress
                  </td>
                  <td className="p-3">15 Jul</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">#1003</td>
                  <td className="p-3">Tech Manufacturing</td>
                  <td className="p-3">Bearings</td>
                  <td className="p-3 text-red-600 font-semibold">
                    Pending
                  </td>
                  <td className="p-3">18 Jul</td>
                </tr>

                <tr>
                  <td className="p-3">#1004</td>
                  <td className="p-3">Global Steel</td>
                  <td className="p-3">Iron Sheets</td>
                  <td className="p-3 text-blue-600 font-semibold">
                    Shipped
                  </td>
                  <td className="p-3">20 Jul</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
              ➕ Add Order
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
              📦 Inventory
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
              👥 Employees
            </button>

            <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg">
              📊 Reports
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
              <h3 className="font-semibold">Order #1001 Completed</h3>
              <p className="text-gray-500">
                Successfully delivered to ABC Industries.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
              <h3 className="font-semibold">Inventory Running Low</h3>
              <p className="text-gray-500">
                Steel Rod stock is below minimum level.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-semibold">New Employee Joined</h3>
              <p className="text-gray-500">
                Rahul Sharma joined the Production Team.
              </p>
            </div>
          </div>
        </div>
        {/* Machine Status */}
<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
  <h2 className="text-2xl font-bold mb-4">
    Machine Status
  </h2>

  <div className="space-y-4">
    {machines.map((machine, index) => (
      <div
        key={index}
        className="flex justify-between items-center border rounded-xl p-4 hover:shadow-md transition"
      >
        <div>
          <h3 className="font-semibold text-lg">
            {machine.name}
          </h3>

          <p className="text-gray-500">
            Efficiency: {machine.efficiency}
          </p>
        </div>

        <span
          className={`${machine.color} text-white px-4 py-2 rounded-full text-sm`}
        >
          {machine.status}
        </span>
      </div>
    ))}
  </div>
</div>
{/* Inventory Monitor */}
<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
  <h2 className="text-2xl font-bold mb-6">Inventory Monitor</h2>

  <div className="space-y-5">
    {inventory.map((item, index) => (
      <div key={index}>
        <div className="flex justify-between mb-2">
          <span className="font-medium">{item.item}</span>
          <span className="font-semibold">{item.stock}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`${item.color} h-3 rounded-full`}
            style={{ width: `${item.stock}%` }}
          ></div>
        </div>

        {item.stock <= 20 && (
          <p className="text-red-600 text-sm mt-1">
            ⚠️ Low Stock - Reorder Required
          </p>
        )}
      </div>
    ))}
  </div>
</div>
{/* Employee Attendance */}
<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
  <h2 className="text-2xl font-bold mb-6">Employee Attendance</h2>

  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 text-left">Employee</th>
          <th className="p-3 text-left">Shift</th>
          <th className="p-3 text-left">Status</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp, index) => (
          <tr key={index} className="border-b">
            <td className="p-3">{emp.name}</td>
            <td className="p-3">{emp.shift}</td>
            <td
              className={`p-3 font-semibold ${
                emp.status === "Present"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {emp.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
        {/* AI Panel */}
        <div className="mt-8">
          <AIPanel />
        </div>
        <div className="mt-8">
  <AIChat />
</div>
      </main>
    </div>
  );
}

export default Dashboard;