import { useEffect, useState } from "react";
import { API } from "../../api";

export default function AddTransactionForm() {
  const [employees, setEmployees] = useState([]);
  const [services, setServices] = useState([]);

  const [employeeName, setEmployeeName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [saleAmount, setSaleAmount] = useState("");

  useEffect(() => {
    API.get("/employees").then(res => setEmployees(res.data));
    API.get("/services").then(res => setServices(res.data));
  }, []);

  const submitHandler = async e => {
    e.preventDefault();

    await API.post("/transactions", {
      employeeName,
      serviceName,
      saleAmount: Number(saleAmount)
    });

    alert("Transaction added");
    setSaleAmount("");
  };

  return (
    <form className="form-card" onSubmit={submitHandler}>
      <h3>Add Transaction</h3>

      <select onChange={e => setEmployeeName(e.target.value)}>
        <option>Select Employee</option>
        {employees.map(e => (
          <option key={e._id}>{e.name}</option>
        ))}
      </select>

      <select onChange={e => setServiceName(e.target.value)}>
        <option>Select Service</option>
        {services.map(s => (
          <option key={s._id}>{s.name}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Sale Amount"
        value={saleAmount}
        onChange={e => setSaleAmount(e.target.value)}
      />

      <button>Add Transaction</button>
    </form>
  );
}
