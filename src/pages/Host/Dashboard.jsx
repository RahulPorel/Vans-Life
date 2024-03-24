import { useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { Link } from "react-router-dom";
import { requireAuth } from "../../../utlies/auth";

import { Suspense } from "react";
import "../../styles/HostDashboard.css";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ hostVans: getHostVans() });
}

export default function Dashboard() {
  const vansData = useLoaderData();

  function getHostVansData(vansData) {
    return vansData.map((van) => (
      <Link to={`vans/${van.id}`} className="host-van-container" key={van.id}>
        <img src={van.imageUrl} className="host-van-image" />
        <div className="host-van-description">
          <h1 className="host-van-name">{van.name}</h1>
          <p className="host-van-price">${van.price}/day</p>
        </div>
      </Link>
    ));
  }

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
        <div className="host-van-list">
          <Suspense fallback={<h2>Loading your vans...</h2>}>
            <Await resolve={vansData.hostVans}>{getHostVansData}</Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
