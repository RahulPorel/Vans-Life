import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../../utlies/api";
import "./Vans.css";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  const location = useLocation();
  const van = useLoaderData();

  const search = `..?${location.state?.search}` || "";
  const displayFilterName = location.state.filterNa;

  return (
    <div className="van-detail-container">
      <Link to={search} relative="path" className="back-button">
        &larr;
        {!location.state.filterNa === "" ? (
          <span>Back to all vans</span>
        ) : (
          <span>Back to all {displayFilterName} vans</span>
        )}
      </Link>

      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}
