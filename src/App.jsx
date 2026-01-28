import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import TransactionsTable from "./components/TransactionsTable";
import EmployeePerformance from "./pages/EmployeePerformance";
import ServicesPage from "./pages/Services";
import ReportsPage from "./pages/ReportsPage";
import AddEmployee from "./pages/AddEmployee";
import AddService from "./pages/AddService";
import AddTransaction from "./pages/AddTransaction";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionsTable />} />
        <Route path="/employees" element={<EmployeePerformance />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/add-service" element={<AddService />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
      </Route>
    </Routes>
  );
}
