import React, { useState, useEffect } from 'react';

import { fetchCountries } from '../api/index';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
      <section className="margin picker">
            <label>Select country</label>
            <select className="browser-default" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="" >Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select>
      </section>
    
  );
};

export default Countries;