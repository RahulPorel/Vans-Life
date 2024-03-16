import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  console.log(params);
  useEffect(() => {
 
  }, [params.id])

  return <h1>Van detail page goes here</h1>;
}
