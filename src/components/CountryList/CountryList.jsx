import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';
import css from '../GridItem/GridItem.module.css';

export const CountryList = ({ contryList }) => {
  return (
    <Grid>
      {contryList.map(({ id, country, flag }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`}>
            <img src={flag} alt={country} />
            <p className={css.name}>{country}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
