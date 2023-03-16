import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ name, code }) => (
  <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg card_item">
    <div className="card-body">
      <h4>{name}</h4>
      <p>{code}</p>
    </div>
  </div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default Country;
