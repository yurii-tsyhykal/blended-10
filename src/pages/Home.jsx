import { Container, CountryList, Heading, Loader, Section } from 'components';
import useFetchCountries from '../hooks/useFetchCountries';
// import { useEffect, useState } from 'react';
// import { getCountries } from 'service/countryApi';

const Home = () => {
  //   const [contryList, setContryList] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       setError(null);
  //       try {
  //         const data = await getCountries();
  //         setContryList(data);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  const { contryList, isLoading, error } = useFetchCountries();
  return (
    <Section>
      <Container>
        {contryList.length > 0 && <CountryList contryList={contryList} />}
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong ..." bottom />}
      </Container>
    </Section>
  );
};

export default Home;
