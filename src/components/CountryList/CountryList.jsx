import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '..';
import css from '../GridItem/GridItem.module.css';

export const CountryList = ({ contryList }) => {
  const location = useLocation();
  console.log(location);
  
  return (
    <Grid>
      {contryList.map(({ id, country, flag }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state = {{from: location}}>
            <img src={flag} alt={country} />
            <p className={css.name}>{country}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
