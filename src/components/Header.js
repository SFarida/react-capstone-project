import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCountryDetails } from '../redux/countries/countriesSlice';

const Header = () => {
  const { allCountries } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();
    const code = search.toUpperCase();
    const country = allCountries.filter((country) => country.countryCode === code);
    if (country.length !== 0) {
      await dispatch(getCountryDetails(code));
      navigate(`/country-details/${code}`);
    } else {
      setError(
        <p>
          <span className="text-danger">The country does not exist in the database please input another country code </span>
          <a href="https://date.nager.at/" target="_blank" rel="noreferrer">See all supported countries</a>
        </p>,
      );
    }
    setSearch('');
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <div className="d-flex flex-wrap align-items-center">
            <h2><span>Country Borders</span></h2>
            <small className="ps-2">How many borders does your country has?</small>
          </div>
        </NavLink>
        <form
          className="d-flex"
          role="search"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter country ISO 2 code"
            aria-label="Search"
            value={search}
            onChange={handleChange}
            maxLength="2"
            required
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div className="container text-center">
        {error}
      </div>
    </nav>
  );
};

export default Header;
