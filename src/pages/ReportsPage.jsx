import ServicesProfitChart from "../components/ServicesProfitChart";
import ProfitByPeriodChart from "../components/ProfitByPeriodChart";
import BackButton from "../components/BackButton";

export default function ReportsPage() {
  return (
    <div style={{ padding: 20 }}>
        <BackButton />
      <h1>Reports & Analytics</h1>
      <ServicesProfitChart />
      <ProfitByPeriodChart />
    </div>
  );
}
