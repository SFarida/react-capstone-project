import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountryDetails } from '../redux/countries/countriesSlice';

const Country = ({ name, code }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    await dispatch(getCountryDetails(code));
    navigate(`/country-details/${code}`);
  };
  return (
    <button
      className="col card card-cover h-100 overflow-hidden text-dark shadow-sm card_item mt-0 link"
      onClick={handleClick}
      onKeyDown={handleClick}
      type="button"
      tabIndex={0}
    >
      <div className="card-body">
        <h4 className="text-wrap">{name}</h4>
        <p>{code}</p>
      </div>
    </button>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default Country;
