import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // create an abort controller
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true); // set isPending to true while data is about to be fetched

      try {
        // pass the abort controller as options as signal
        const res = await fetch(url, { signal: controller.signal });
        // Check if res is not ok and pass an error
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          const json = await res.json();
          setIsPending(false); // set isPending to false when data loads
          setData(json);
          setError(null); // set error to null if there is success
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch was aborted");
        } else {
          setIsPending(false); // set isPending to false when there is an error in loading data
          setError("Could not fetch the data");
          console.log(err.message);
        }
      }
    };

    fetchData();

    // Clean up function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
