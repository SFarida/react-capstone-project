import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from './Country';

const Countries = () => {
  const dispatch = useDispatch();
  const { allCountries, status } = useSelector((store) => store.countries);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCountries());
    }
    window.scrollTo(0, 0);
  }, [status, dispatch]);

  return (
    <section className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Countries</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {
          allCountries.map((country) => (
            <Country
              key={country.countryCode}
              name={country.name}
              code={country.countryCode}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Countries;
