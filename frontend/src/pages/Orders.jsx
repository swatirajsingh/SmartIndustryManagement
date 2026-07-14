import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Orders() {
  const API = "https://smartindustrymanagement.onrender.com/api/orders";

  const [orders, setOrders] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    customerName: "",
    product: "",
    quantity: "",
    status: "",
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(API);
      setOrders(res.data);
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

  const saveOrder = async () => {
    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, form);
      } else {
        await axios.post(API, form);
      }

      setForm({
        customerName: "",
        product: "",
        quantity: "",
        status: "",
      });

      setEditId(null);
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  const editOrder = (order) => {
    setForm({
      customerName: order.customerName,
      product: order.product,
      quantity: order.quantity,
      status: order.status,
    });

    setEditId(order._id);
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          📦 Orders Management
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <div className="grid md:grid-cols-5 gap-3">
            <input
              className="border p-2 rounded"
              placeholder="Customer Name"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded"
              placeholder="Product"
              name="product"
              value={form.product}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded"
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={form.quantity}
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
              onClick={saveOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              {editId ? "Update Order" : "Add Order"}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-3">Customer</th>
                <th className="text-left p-3">Product</th>
                <th className="text-left p-3">Quantity</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="p-3">{order.customerName}</td>
                  <td className="p-3">{order.product}</td>
                  <td className="p-3">{order.quantity}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => editOrder(order)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteOrder(order._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {orders.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-6 text-gray-500"
                  >
                    No Orders Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Orders;