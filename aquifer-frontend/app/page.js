"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [bestSupplier, setBestSupplier] = useState(null);
  const [order, setOrder] = useState(null);
  const [insights, setInsights] = useState(null);   // NEW STATE
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);

  const API_BASE = "https://aquifer-ai.onrender.com";

  const startProcurement = async () => {

    if (!product || !quantity) return;

    setLoading(true);
    setError(null);
    setLogs([]);
    setOrder(null);
    setInsights(null);

    try {

      const response = await axios.post(`${API_BASE}/procure`, {
        name: product,
        quantity: parseInt(quantity)
      });

      const data = response.data?.data || response.data?.result?.data;

      if (data) {
        setSuppliers(data.suppliers || []);         // UPDATED
        setBestSupplier(data.best_supplier || null);
        setOrder(data.order || null);
        setInsights(data.insights || null);         // NEW LINE
      }

      await fetchLogs();

    } catch (err) {
      console.error(err);
      setError("System unavailable. Please verify backend connection.");
    } finally {
      setLoading(false);
    }
  };

  const fetchLogs = async () => {
    try {
      const response = await axios.get(`${API_BASE}/logs`);
      setLogs(response.data.logs || []);
    } catch (error) {
      console.error("Log fetch failed:", error);
    }
  };

  const formatUSD = (val) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(val);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">

      {/* NAVBAR */}
      <nav className="bg-white border-b border-slate-200 px-8 py-4 mb-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="text-xl font-bold">
              Aquifer <span className="text-blue-600">Sourcing</span>
            </span>
          </div>

          <div className="text-sm text-slate-500 font-medium uppercase">
            Enterprise AI v1.1
          </div>

        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">

        {/* INPUT PANEL */}
        <section className="grid lg:grid-cols-3 gap-8 mb-10">

          <div className="bg-white p-6 rounded-xl shadow border">

            <h2 className="text-sm font-semibold text-slate-500 uppercase mb-4">
              Procurement Parameters
            </h2>

            <div className="space-y-4">

              <input
                className="w-full border p-3 rounded"
                placeholder="Product name"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />

              <input
                className="w-full border p-3 rounded"
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <button
                onClick={startProcurement}
                disabled={loading}
                className="w-full bg-slate-900 text-white py-3 rounded hover:bg-blue-600"
              >
                {loading ? "Analyzing Market..." : "Execute Sourcing"}
              </button>

            </div>

          </div>

          {/* KPI PANEL */}
          {suppliers.length > 0 && (

            <div className="lg:col-span-2 grid grid-cols-3 gap-4">

              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
                <p className="text-xs uppercase">Best Unit Price</p>
                <p className="text-2xl font-bold">
                  {formatUSD(bestSupplier?.price)}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
                <p className="text-xs uppercase">Estimated TCV</p>
                <p className="text-2xl font-bold">
                  {formatUSD(bestSupplier?.price * quantity)}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-orange-500">
                <p className="text-xs uppercase">Delivery</p>
                <p className="text-2xl font-bold">
                  {bestSupplier?.delivery_days} Days
                </p>
              </div>

            </div>

          )}

        </section>

        {/* LOADING ANIMATION */}
        {loading && (
          <div className="text-center mt-6">
            <div className="animate-pulse text-lg font-semibold">
              AI Agent is executing procurement workflow...
            </div>
          </div>
        )}

        {/* SUPPLIER TABLE */}
        {suppliers.length > 0 && (

          <div className="bg-white rounded-xl shadow border overflow-hidden mb-10">

            <div className="px-6 py-4 border-b bg-slate-50">
              <h3 className="font-bold text-lg">
                Market Comparison Report
              </h3>
            </div>

            <table className="w-full text-left">

              <thead className="bg-gray-100 text-xs uppercase">
                <tr>
                  <th className="p-4">Supplier</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Delivery</th>
                  <th className="p-4">Website</th>
                </tr>
              </thead>

              <tbody>

                {suppliers.map((s, i) => {

                  const isBest = bestSupplier?.supplier === s.supplier;

                  return (
                    <tr
                      key={i}
                      className={isBest ? "bg-blue-50 font-semibold" : ""}
                    >
                      <td className="p-4">{s.supplier}</td>
                      <td className="p-4">{formatUSD(s.price)}</td>
                      <td className="p-4">{s.rating}</td>
                      <td className="p-4">{s.delivery_days} days</td>
                      <td className="p-4">
                        <a
                          href={s.website}
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          Source
                        </a>
                      </td>
                    </tr>
                  );

                })}

              </tbody>

            </table>

          </div>

        )}

        {/* AI AGENT WORKFLOW */}
        {logs.length > 0 && (

          <div className="max-w-4xl mx-auto mt-10">

            <h2 className="text-2xl font-semibold mb-4">
              AI Agent Workflow
            </h2>

            <div className="bg-black text-green-400 p-6 rounded font-mono">

              {logs.map((log, index) => (

                <div key={index} className="flex items-center mb-2">
                  <span className="mr-2">✔</span>
                  <span>{log}</span>
                </div>

              ))}

            </div>

          </div>

        )}

        {/* ORDER CONFIRMATION */}
        {order && (

          <div className="max-w-4xl mx-auto mt-10">

            <h2 className="text-2xl font-semibold mb-4">
              Order Confirmation
            </h2>

            <div className="bg-white shadow p-6 rounded">

              <p><b>Order ID:</b> {order.order_id}</p>
              <p><b>Product:</b> {order.product}</p>
              <p><b>Quantity:</b> {order.quantity}</p>
              <p><b>Supplier:</b> {order.supplier}</p>
              <p><b>Price:</b> {formatUSD(order.price)}</p>
              <p><b>Status:</b> {order.status}</p>

            </div>

          </div>

        )}

        {/* PROCUREMENT INSIGHTS */}
        {insights && (

          <div className="max-w-4xl mx-auto mt-10">

            <h2 className="text-2xl font-semibold mb-4">
              Procurement Insights
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white p-6 shadow rounded">
                <p className="text-gray-500">Suppliers Analyzed</p>
                <p className="text-2xl font-bold">
                  {insights.total_suppliers}
                </p>
              </div>

              <div className="bg-white p-6 shadow rounded">
                <p className="text-gray-500">Average Price</p>
                <p className="text-2xl font-bold">
                  {insights.average_price}
                </p>
              </div>

              <div className="bg-white p-6 shadow rounded">
                <p className="text-gray-500">Best Price</p>
                <p className="text-2xl font-bold">
                  {insights.best_price}
                </p>
              </div>

              <div className="bg-white p-6 shadow rounded">
                <p className="text-gray-500">Estimated Savings</p>
                <p className="text-2xl font-bold text-green-600">
                  {insights.estimated_savings}
                </p>
              </div>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}
