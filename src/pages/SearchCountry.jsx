import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [contryList, setContryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region');

  useEffect(() => {
    if (!region) return;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchByRegion(region);
        setContryList(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [region]);

  const onSubmit = query => {
    setSearchParams({ region: query });
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {contryList.length > 0 && <CountryList contryList={contryList} />}
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong ..." bottom />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
