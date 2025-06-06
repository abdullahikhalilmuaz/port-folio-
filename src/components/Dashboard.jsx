import { useState } from "react";
import "../styles/dashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import AddProject from "../components/AddProject";
import DashboardToShow from "../components/DashboardToShow";
export default function Dashboard() {
  const [showHeader, setShowHeader] = useState("dashboard");

  return (
    <div className="main-dashboard-container">
      <DashboardHeader showHeader={showHeader} setShowHeader={setShowHeader} />
      {showHeader === "add" ? <AddProject /> : <DashboardToShow />}
    </div>
  );
}
