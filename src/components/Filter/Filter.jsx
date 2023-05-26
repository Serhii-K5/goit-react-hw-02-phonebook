import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <>
    <label className={css.filterLabel}>Find contacts by Name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter name"
      value={filter}
      onChange={handleChange}
    />
  </>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};