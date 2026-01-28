import { useState } from "react";
import { API } from "../../api";

export default function AddServiceForm() {
  const [name, setName] = useState("");
  const [costAmount, setCostAmount] = useState("");
  const [saleAmount, setSaleAmount] = useState("");

  const submitHandler = async e => {
    e.preventDefault();

    await API.post("/services", {
      name,
      costAmount: Number(costAmount),
      saleAmount: Number(saleAmount || 0)
    });

    alert("Service added");
    setName("");
    setCostAmount("");
    setSaleAmount("");
  };

  return (
    <form className="form-card" onSubmit={submitHandler}>
      <h3>Add Service</h3>

      <input placeholder="Service Name" value={name}
        onChange={e => setName(e.target.value)} />

      <input placeholder="Cost Amount" type="number"
        value={costAmount} onChange={e => setCostAmount(e.target.value)} />

      <input placeholder="Default Sale Amount" type="number"
        value={saleAmount} onChange={e => setSaleAmount(e.target.value)} />

      <button>Add Service</button>
    </form>
  );
}
