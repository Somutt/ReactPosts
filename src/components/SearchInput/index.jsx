import React from 'react';
import P from 'prop-types';

import './styles.css';

export const SearchInput = ({ onChange }) => {
  return <input className="search-input" type="search" onChange={onChange} placeholder="Type your search" />;
};

SearchInput.propTypes = {
  onChange: P.func.isRequired,
};
