export default function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        minWidth: 220,
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        borderLeft: `6px solid ${color}`
      }}
    >
      <h4 style={{ margin: 0, color: "#555" }}>{title}</h4>
      <h2 style={{ marginTop: 10, color }}>{value}</h2>
    </div>
  );
}
