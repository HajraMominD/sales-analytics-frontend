import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../api";

import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [stats, setStats] = useState({
    revenue: 0,
    profit: 0,
    loss: 0,
    transactions: 0
  });

  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const txRes = await API.get("/transactions");
        const tx = txRes.data || [];

        let revenue = 0;
        let profit = 0;
        let loss = 0;

        tx.forEach(t => {
          revenue += t.saleAmount || 0;
          if ((t.profit || 0) >= 0) profit += t.profit;
          else loss += Math.abs(t.profit || 0);
        });

        setStats({
          revenue,
          profit,
          loss,
          transactions: tx.length
        });

        // OPTIONAL: replace with real service analytics endpoint
        const serviceRes = await API.get("/services/performance");
        setServiceData(serviceRes.data || []);
      } catch (err) {
        console.error("Dashboard load failed:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <StatCard title="Total Revenue" value={stats.revenue} color="#3b82f6" />
        <StatCard title="Total Profit" value={stats.profit} color="#22c55e" />
        <StatCard title="Total Loss" value={stats.loss} color="#ef4444" />
        <StatCard
          title="Total Transactions"
          value={stats.transactions}
          color="#64748b"
        />
      </div>

      <h2>Admin Actions</h2>
      <ul className="admin-actions-list">
  <li><Link to="/add-employee">Add Employee</Link></li>
  <li><Link to="/add-service">Add Service</Link></li>
  <li><Link to="/add-transaction">Add Transaction</Link></li>
</ul>


    </div>
  );
}
