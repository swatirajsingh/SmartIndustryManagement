
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Inventory() {
  const API = "http://localhost:5000/api/inventory";

  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    itemName: "",
    quantity: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data);
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

  const saveInventory = async () => {
    try {
      await axios.post(API, form);

      setForm({
        itemName: "",
        quantity: "",
        category: "",
        status: "",
      });

      fetchInventory();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteInventory = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchInventory();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          📦 Inventory Management
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <div className="grid md:grid-cols-5 gap-3">
            <input
              className="border p-2 rounded"
              placeholder="Item Name"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded"
              placeholder="Quantity"
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded"
              placeholder="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded"
              placeholder="Status"
              name="status"
              value={form.status}
              onChange={handleChange}
            />

            <button
              onClick={saveInventory}
              className="bg-blue-600 text-white rounded"
            >
              Add Item
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Item</th>
                <th className="text-left p-3">Quantity</th>
                <th className="text-left p-3">Category</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-b">
                  <td className="p-3">{product.itemName}</td>
                  <td className="p-3">{product.quantity}</td>
                  <td className="p-3">{product.category}</td>

                  <td className="p-3">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full">
                      {product.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <div className="flex gap-2">
  <button
    onClick={() => editInventory(product)}
    className="bg-yellow-500 text-white px-3 py-1 rounded"
  >
    Edit
  </button>

  <button
    onClick={() => deleteInventory(product._id)}
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

export default Inventory;
