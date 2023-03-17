import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountryDetails } from '../redux/countries/countriesSlice';

const Country = ({ name, code }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/country-details/${code}`}
      className="col card card-cover h-100 overflow-hidden text-dark shadow-sm card_item mt-0 link"
      onClick={async () => {
        await dispatch(getCountryDetails(code));
      }}
    >
      <div className="card-body">
        <h4>{name}</h4>
        <p>{code}</p>
      </div>
    </Link>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default Country;
