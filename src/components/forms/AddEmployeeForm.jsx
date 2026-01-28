import { useState } from "react";
import { API } from "../../api";

export default function AddEmployeeForm() {
  const [name, setName] = useState("");

  const submitHandler = async e => {
    e.preventDefault();
    if (!name) return alert("Employee name required");

    await API.post("/employees", { name });
    alert("Employee added");
    setName("");
  };

  return (
    <form onSubmit={submitHandler} className="form-card">
      <h3>Add Employee</h3>

      <input
        placeholder="Employee Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button>Add Employee</button>
    </form>
  );
}
