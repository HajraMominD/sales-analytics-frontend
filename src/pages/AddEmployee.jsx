import AddEmployeeForm from "../components/forms/AddEmployeeForm";
import BackButton from "../components/BackButton";

export default function AddEmployee() {
  return (
    <div className="page-container">
     <BackButton />

      <h1>Add Employee</h1>
      <AddEmployeeForm />
    </div>
  );
}
