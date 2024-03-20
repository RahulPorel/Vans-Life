/** @format */

import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import "./Vans.css";
import { getVans } from "../../../utlies/api";

export function Loader() {
  return "Vans data goes here";
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const typeFilter = searchParams.get("type");
  const data = useLoaderData();
  console.log(data);

  const displayFilterVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  useEffect(() => {
    async function loadVans(props) {
      setLoading(true);
      const data = await getVans();
      setVans(data);
      setLoading(false);
    }

    loadVans();
  }, []);
  <NavLink />;

  const vanElements = displayFilterVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        aria-label={`View details for ${van.name}, 
         priced at $${van.price} per day`}
        state={{ search: searchParams.toString(), filterNa: typeFilter }}
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

  if (laoding) {
    return <h1 aria-live="polite"> Loading...</h1>;
  }

  if (error) {
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
  }

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
