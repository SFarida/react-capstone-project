import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getCountryDetails } from '../redux/countries/countriesSlice';

const Country = ({ name, code }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // to={`/country-details/${code}`}
  const handleClick = async () => {
    await dispatch(getCountryDetails(code));
    navigate(`/country-details/${code}`);
  };
  return (
    <div
      className="col card card-cover h-100 overflow-hidden text-dark shadow-sm card_item mt-0 link"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="card-body">
        <h4>{name}</h4>
        <p>{code}</p>
      </div>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default Country;
