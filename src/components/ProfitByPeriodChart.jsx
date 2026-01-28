import { useEffect, useState } from "react";
import { API } from "../api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ProfitByPeriodChart() {
  const [period, setPeriod] = useState("weekly");
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/transactions").then(res => {
      const transactions = res.data;

      const grouped = {};

      transactions.forEach(t => {
        const date = new Date(t.createdAt || t.date);

        let key;

        if (period === "weekly") {
          const week = Math.ceil(date.getDate() / 7);
          key = `Week ${week}`;
        } else {
          key = date.toLocaleString("default", { month: "short" });
        }

        if (!grouped[key]) {
          grouped[key] = 0;
        }

        grouped[key] += t.profit;
      });

      const formatted = Object.keys(grouped).map(k => ({
        label: k,
        totalProfit: grouped[k]
      }));

      setData(formatted);
    });
  }, [period]);

  return (
    <div style={{ height: 320, marginTop: 30 }}>
      <h3>Profit By {period}</h3>

      <select onChange={e => setPeriod(e.target.value)}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="totalProfit"
            stroke="#22c55e"
            strokeWidth={6}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
