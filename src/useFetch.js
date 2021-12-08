import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fecth the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // console.log("fetch aborted");
          console.log(err.name);
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abort.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
