import AddServiceForm from "../components/forms/AddServiceForm";
import BackButton from "../components/BackButton";

export default function AddService() {
  return (
    <div className="page-container">
    <BackButton />

      <h1>Add Service</h1>
      <AddServiceForm />
    </div>
  );
}