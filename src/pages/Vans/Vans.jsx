import { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import "./Vans.css";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const displayFilterVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = displayFilterVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
         priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>

      <div className="van-list-filter-buttons">
        <button
          className={`${
            typeFilter === "simple"
              ? "van-type simple selected"
              : "van-type simple "
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`${
            typeFilter === "luxury"
              ? "van-type luxury selected"
              : "van-type luxury "
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
          to="?type=luxury"
        >
          Luxury
        </button>
        <button
          className={`${
            typeFilter === "rugged"
              ? "van-type rugged selected"
              : "van-type rugged "
          }`}
          to="?type=rugged"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>

        {typeFilter ? (
          <NavLink className="van-type clear-filters" to=".">
            Clear
          </NavLink>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
