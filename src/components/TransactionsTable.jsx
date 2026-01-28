import { useEffect, useState } from "react";
import { API } from "../api";

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/transactions")
      .then((res) => {
        setTransactions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching transactions:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading transactions...</p>;
  }

  return (
    <div style={{ marginTop: 30 }}>
      <h3>All Transactions</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "rgb(4, 31, 107)", color: "#ecd8d8" }}>
              <th style={{ padding: 10, border: "1px solid #ccc" }}>#</th>
              <th style={{ padding: 10, border: "1px solid #ccc" }}>Employee</th>
              <th style={{ padding: 10, border: "1px solid #ccc" }}>Service</th>
              <th style={{ padding: 10, border: "1px solid #ccc" }}>Sale Amount</th>
              <th style={{ padding: 10, border: "1px solid #ccc" }}>Cost Amount</th>
              <th style={{ padding: 10, border: "1px solid #ccc" }}>Profit</th>
              <th style={{ padding: 10, border: "1px solid #ccc" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, idx) => (
              <tr key={t._id} style={{ backgroundColor: idx % 2 === 0 ? "#52778b" : "#52778b" }}>
                <td style={{ padding: 10, border: "1px solid #ccc" }}>{idx + 1}</td>
                <td style={{ padding: 10, border: "1px solid #ccc" }}>{t.employee.name}</td>
                <td style={{ padding: 10, border: "1px solid #ccc" }}>{t.service.name}</td>
                <td style={{ padding: 10, border: "1px solid #ccc" }}>{t.saleAmount}</td>
                <td style={{ padding: 10, border: "1px solid #ccc" }}>{t.costAmount}</td>
                <td style={{ padding: 10, border: "1px solid #ccc" }}>{t.profit}</td>
                <td style={{ padding: 10, border: "1px solid #ccc" }}>
                  {new Date(t.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
