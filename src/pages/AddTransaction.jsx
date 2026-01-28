import AddTransactionForm from "../components/forms/AddTransactionForm";
import BackButton from "../components/BackButton";

export default function AddTransaction() {
  return (
    <div className="page-container">
      <BackButton />
      <h1>Add Transaction</h1>
      <AddTransactionForm />
    </div>
  );
}
