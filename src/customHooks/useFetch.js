import { useEffect, useState } from "react";
import axios from "axios";

// custom hook to fetch data from an API //
export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  // reFetch function to fetch data again after an error //
  const reFetch = async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };
  return { loading, error, data, reFetch };
};
