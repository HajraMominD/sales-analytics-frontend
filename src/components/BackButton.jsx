import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      style={{
        marginBottom: 20,
        background: "transparent",
        border: "none",
        color: "#2563eb",
        fontSize: 16,
        cursor: "pointer",
        fontWeight: 600
      }}
    >
      ← Back to Dashboard
    </button>
  );
}
