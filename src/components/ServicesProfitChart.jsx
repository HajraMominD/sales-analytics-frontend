import { useEffect, useState } from "react";
import { API } from "../api";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function ServicesProfitChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/transactions/reports/services/profit")
      .then(res => setData(res.data.data));
  }, []);

  return (
    <div style={{ height: 300 }}>
      <h3>Service Profit</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="serviceName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalProfit" />
          <Bar dataKey="totalProfit" fill="#4f46e5" />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
