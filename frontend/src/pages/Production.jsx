import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
const [editId, setEditId] = useState(null);
function Production() {
  const API = "http://localhost:5000/api/production";

  const [production, setProduction] = useState([]);

  const [form, setForm] = useState({
    productName: "",
    unitsProduced: "",
    energyUsed: "",
  });

  const fetchProduction = async () => {
    try {
      const res = await axios.get(API);
      setProduction(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduction();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const saveProduction = async () => {
  try {
    if (editId) {
      await axios.put(`${API}/${editId}`, form);
    } else {
      await axios.post(API, form);
    }

    setForm({
      productName: "",
      unitsProduced: "",
      energyUsed: "",
    });

    setEditId(null);
    fetchProduction();
  } catch (err) {
    console.error(err);
  }
};
const editProduction = (item) => {
  setForm({
    productName: item.productName,
    unitsProduced: item.unitsProduced,
    energyUsed: item.energyUsed,
  });

  setEditId(item._id);
};
  const deleteProduction = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchProduction();
    } catch (err) {
      console.error(err);
    }
  };

 return (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />

    <main className="flex-1 p-8">

    
      <h1 className="text-3xl font-bold mb-6">
        Production Management
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          className="border p-2 rounded"
          type="text"
          name="productName"
          placeholder="Product Name"
          value={form.productName}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          type="number"
          name="unitsProduced"
          placeholder="Units Produced"
          value={form.unitsProduced}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          type="number"
          name="energyUsed"
          placeholder="Energy Used"
          value={form.energyUsed}
          onChange={handleChange}
        />

        <button
          onClick={saveProduction}
          className="bg-blue-600 text-white px-4 rounded"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Units Produced</th>
            <th className="p-3">Energy Used</th>
            <th className="p-3">Date</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {production.map((item) => (
            <tr key={item._id} className="border-b">
              <td className="p-3">{item.productName}</td>
              <td className="p-3">{item.unitsProduced}</td>
              <td className="p-3">{item.energyUsed} kWh</td>
              <td className="p-3">
                {new Date(item.date).toLocaleDateString()}
              </td>
              <td className="p-3">
                <button
                  onClick={() => deleteProduction(item._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  <td className="p-3">
  <div className="flex gap-2">
    <button
      onClick={() => editProduction(item)}
      className="bg-yellow-500 text-white px-3 py-1 rounded"
    >
      Edit
    </button>

    <button
      onClick={() => deleteProduction(item._id)}
      className="bg-red-600 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  </div>
</td>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       </main>
    </div>
  ) ;
}

export default Production;
