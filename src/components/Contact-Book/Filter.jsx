import React from 'react';
import { PhoneBookInput } from './ContactBook.Styled';
import PropTypes from 'prop-types';

export const Filter = ({ setFilter, filter }) => {
  return (
    <PhoneBookInput
      value={filter}
      placeholder="Feel free to filter by name..."
      onChange={setFilter}
      type="text"
      name="filter"
      title="Filtering contact list by name."
    />
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
