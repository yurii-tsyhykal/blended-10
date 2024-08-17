import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const useFetchCountries = () => {
  const [contryList, setContryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCountries();
        setContryList(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { contryList, isLoading, error };
};
export default useFetchCountries;
