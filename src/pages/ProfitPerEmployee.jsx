import { useEffect, useState } from "react";
import { API } from "../api";
import BackButton from "../components/BackButton";

function ProfitPerEmployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/transactions/reports/employees/profit-percentage")
      .then(res => setEmployees(res.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ color: "white" }}>
      <BackButton />
      <h2>Profit Percentage Per Employee</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Profit %</th>
            <th>Total Profit</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e, index) => (
            <tr key={index}>
              <td>{e.employeeName}</td>
              <td>{e.profitPercentage}%</td>
              <td>{e.totalProfit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProfitPerEmployee;
