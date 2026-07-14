import { useState } from "react";
import axios from "axios";

function InventoryForm({ fetchInventory }) {
  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    status: "In Stock",
    supplier: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://smartindustrymanagement.onrender.com/api/inventory", formData);

      setFormData({
        name: "",
        stock: "",
        status: "In Stock",
        supplier: "",
      });

      fetchInventory();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Critical</option>
        </select>

        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={formData.supplier}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}

export default InventoryForm;