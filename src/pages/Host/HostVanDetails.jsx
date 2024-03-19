import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  return <div>HostVanDetails</div>;
};

export default HostVanDetails;
