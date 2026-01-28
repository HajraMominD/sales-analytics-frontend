import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: 220,
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: 20
      }}
    >
      <h2 style={{ marginBottom: 30 }}>Admin Panel</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <Link style={linkStyle} to="/">Dashboard</Link>
        <Link style={linkStyle} to="/transactions">Transactions</Link>
        <Link style={linkStyle} to="/employees">Employee Performance</Link>
        <Link style={linkStyle} to="/reports">Reports & Charts</Link>
        <Link style={linkStyle} to="/services">Services and Demand Planning</Link>

      </nav>
    </div>
  );
}

const linkStyle = {
  color: "#cbd5f5",
  textDecoration: "none",
  fontSize: 16
};
