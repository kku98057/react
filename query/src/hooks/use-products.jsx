import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [products, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`/products${salesOnly ? "_sale" : ""}.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("dldidi");
      })
      .catch(() => setError("에러가발생했음"))
      .finally(() => setLoading(false));

    return () => {
      console.log("언마운트");
    };
  }, [salesOnly]);
  return [loading, error, products];
}
