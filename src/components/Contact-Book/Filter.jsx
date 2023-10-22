import React from 'react';
import PropTypes from 'prop-types';
import {
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
} from './ContactBook.Styled';
export const Filter = ({ setFilter, filter }) => {
  const handleFilterInput = e => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };
  return (
    <PhoneBookInputContainer>
      <PhoneBookInputLabel>Find contacts by name: </PhoneBookInputLabel>
      <PhoneBookInput
        value={filter}
        placeholder="Feel free to filter by name..."
        onChange={handleFilterInput}
        type="text"
        name="filter"
        title="Filtering contact list by name."
      />
    </PhoneBookInputContainer>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
