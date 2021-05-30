import React from 'react';
import './SearchBox.css';

const SearchBox = () => (

  <div className="Search">
    <input type="text" className="Searchbar" placeholder="Photos, people ,or groups" aria-label="Username" aria-describedby="basic-addon1" />
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <button type="button">Search</button>
  </div>

);

export default SearchBox;
