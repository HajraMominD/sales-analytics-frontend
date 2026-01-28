import { useEffect, useState } from "react";
import { API } from "../api";
import BackButton from "../components/BackButton";

export default function EmployeePerformance() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/transactions").then(res => {
      const data = res.data;
      const map = {};

      data.forEach(t => {
        const name = t.employee.name;

        if (!map[name]) {
          map[name] = {
            name,
            revenue: 0,
            profit: 0,
            loss: 0,
            transactions: 0
          };
        }

        map[name].revenue += t.saleAmount;
        map[name].transactions += 1;

        if (t.profit >= 0) {
          map[name].profit += t.profit;
        } else {
          map[name].loss += Math.abs(t.profit);
        }
      });

      const result = Object.values(map).map(e => {
        const profitPercentage =
          e.revenue > 0 ? ((e.profit / e.revenue) * 100).toFixed(1) : 0;

        let status = "Needs Improvement";
        let color = "#ef4444";

        if (profitPercentage >= 40) {
          status = "Top Performer";
          color = "#22c55e";
        } else if (profitPercentage >= 20) {
          status = "Average Performer";
          color = "#eab308";
        }

        return { ...e, profitPercentage, status, color };
      });

      setEmployees(result);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
        <BackButton />
      <h1>Employee Performance</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 20
        }}
      >
        <thead>
          <tr style={{ background: "#2b4a69" }}>
            <th>Employee</th>
            <th>Revenue</th>
            <th>Profit</th>
            <th>Loss</th>
            <th>Transactions</th>
            <th>Profit %</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.revenue}</td>
              <td style={{ color: "#22c55e" }}>{e.profit}</td>
              <td style={{ color: "#ef4444" }}>{e.loss}</td>
              <td>{e.transactions}</td>
              <td>{e.profitPercentage}%</td>
              <td style={{ color: e.color, fontWeight: "bold" }}>
                {e.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
