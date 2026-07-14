
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Employees() {
  const API = "https://smartindustrymanagement.onrender.com/api/employees";

  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
  name: "",
  department: "",
  role: "",
});
const [editId, setEditId] = useState(null);
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(API);
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const saveEmployee = async () => {
  try {
    if (editId) {
      await axios.put(`${API}/${editId}`, form);
    } else {
      await axios.post(API, form);
    }

    setForm({
      name: "",
      department: "",
      role: "",
    });

    setEditId(null);
    fetchEmployees();
  } catch (err) {
    console.error(err);
  }
};
const editEmployee = (emp) => {
  setForm({
    name: emp.name,
    department: emp.department,
    role: emp.role,
  });

  setEditId(emp._id);
};
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          👥 Employee Management
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <div className="grid md:grid-cols-4 gap-3">
            <input
              className="border p-2 rounded"
              placeholder="Employee Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded"
              placeholder="Department"
              name="department"
              value={form.department}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded"
              placeholder="Role"
              name="role"
              value={form.role}
              onChange={handleChange}
            />

            <button
              onClick={saveEmployee}
              className="bg-blue-600 text-white rounded"
            >
              {editId ? "Update Employee" : "Add Employee"}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Department</th>
                <th className="text-left p-3">Position</th>
                <th className="text-left p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp._id} className="border-b">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.department}</td>
                  <td className="p-3">{emp.role}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
  <button
    onClick={() => editEmployee(emp)}
    className="bg-yellow-500 text-white px-3 py-1 rounded"
  >
    Edit
  </button>

  <button
    onClick={() => deleteEmployee(emp._id)}
    className="bg-red-600 text-white px-3 py-1 rounded"
  >
    Delete
  </button>
</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Employees;
