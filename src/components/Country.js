import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ name, code }) => (
  <Link to={`country-details/${code}`} className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg card_item">
    <div className="card-body">
      <h4>{name}</h4>
      <p>{code}</p>
    </div>
  </Link>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default Country;
