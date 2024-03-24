import { Link } from "react-router-dom";

import "./Host Styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-income-container">
        <h2 className="dashboard-income-welcome-msg">Welcome!</h2>
        <div className="dashboard-income-links">
          <p>
            Income last{" "}
            <span style={{ textDecoration: "underline" }}>30 days</span>
          </p>
          <Link to="income">Details</Link>
        </div>
        <h1 className="dashboard-income-sum">$2,260</h1>
      </div>
      <div className="dashboard-reviews-container">
        <h3>Review score ⭐5.0/5.0</h3>
        <Link to="reviews">Details</Link>
      </div>
      <div className="dashboard-vans-container">
        <div className="dashboard-vans-container-header">
          <h2 className="dashboard-vans-container-title">Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <div className="host-van-list"></div>
      </div>
    </div>
  );
}
