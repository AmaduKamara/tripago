import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true); // set isPending to true while data is about to be fetched

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          const json = await res.json();
          setIsPending(false); // set isPending to false when data loads
          setData(json);
          setError(null); // set error to null if there is success
        }
      } catch (err) {
        setIsPending(false); // set isPending to false when there is an error in loading data
        setError("Could not fetch the data");
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};
