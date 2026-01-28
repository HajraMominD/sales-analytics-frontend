import { useEffect, useState } from "react";
import { API } from "../api";
import BackButton from "../components/BackButton";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get("/transactions/reports/services/profit")
      .then(res => setServices(res.data.data));
  }, []);

  const getDemand = count => {
    if (count >= 8) return "High";
    if (count >= 4) return "Medium";
    return "Low";
  };

  const getStatus = (profit, count) => {
    if (profit > 0 && count >= 8) return "Top Performer";
    if (profit > 0) return "Needs Review";
    return "Critical";
  };

  return (
    <div className="page-container">
      <BackButton />
<h1>Services and Demand Planning</h1>

<table className="service-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>Total Revenue</th>
      <th>Total Profit</th>
      <th>Demand</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Web Design</td>
      <td>21400</td>
      <td className="profit-positive">17900</td>
      <td>
        <span className="demand medium">Medium</span>
      </td>
      <td>Needs Review</td>
    </tr>

    <tr>
      <td>Logo Design</td>
      <td>5000</td>
      <td className="profit-positive">4800</td>
      <td>
        <span className="demand low">Low</span>
      </td>
      <td>Needs Review</td>
    </tr>

    <tr>
      <td>MAD</td>
      <td>70</td>
      <td className="profit-negative">-933</td>
      <td>
        <span className="demand low">Low</span>
      </td>
      <td>Critical</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}
