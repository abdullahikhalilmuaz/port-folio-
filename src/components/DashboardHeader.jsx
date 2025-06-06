import { useState } from "react";
import { FaHouse, FaPlugCircleBolt } from "react-icons/fa6";
import "../styles/dash-header.css";
import { FaPlusCircle, FaBarcode, FaChartPie, FaHome } from "react-icons/fa";
export default function DashboardHeader({ showHeader, setShowHeader }) {
  return (
    <div className="dashboard-header">
      <ul>
        <li className="items" onClick={() => setShowHeader("Dashboard")}>
          <FaHouse /> Dashboard
        </li>
        <li className="items" onClick={() => setShowHeader("add")}>
          <FaPlusCircle /> New
        </li>
      </ul>
      {console.log(showHeader)}
    </div>
  );
}
