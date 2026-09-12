import { useCallback, useEffect, useState } from "react";
import api from "../services/api";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string;
  refetch: () => Promise<void>;
}

const useFetch = <T,>(
  url: string
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(url);

      setData(response.data);
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Unable to fetch data."
      );
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useFetch;