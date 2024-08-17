import { useState } from 'react';
import styles from './SearchForm.module.css';
import { FiSearch } from 'react-icons/fi';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        onChange={handleChange}
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(({ id, value, name }) => {
          return (
            <option key={id} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
