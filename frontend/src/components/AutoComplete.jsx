import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';

const options = [
    {
        label: 'Alabama',
        population: 4780127,
        capital: 'Montgomery',
        region: 'South',
      },
      { label: 'Alaska', population: 710249, capital: 'Juneau', region: 'West' },
      { label: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West' },
      {
        label: 'Arkansas',
        population: 2915958,
        capital: 'Little Rock',
        region: 'South',
      },
      {
        label: 'California',
        population: 37254503,
        capital: 'Sacramento',
        region: 'West',
      },
      { label: 'Colorado', population: 5029324, capital: 'Denver', region: 'West' },
      {
        label: 'Connecticut',
        population: 3574118,
        capital: 'Hartford',
        region: 'Northeast',
      },
]

const AutoComplete = () => {
    const [selected, setSelected] = useState([]);
  
    return (
        <div>
      <Typeahead
        id="basic-example"
        onChange={setSelected}
        options={options}
        placeholder="Choose a state..."
        selected={selected}
      />
      </div>
    );
  };
export default AutoComplete