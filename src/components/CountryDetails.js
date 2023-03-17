import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Countries from './Countries';

const CountryDetails = () => {
  const { code } = useParams();
  const { allCountries } = useSelector((store) => store.countries);
  let selectedCountry = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (allCountries.length !== 0) {
    const country = allCountries.filter((country) => country.countryCode === code)[0];
    selectedCountry = country.info.length !== 0 ? country.info : [];
  }

  let content;
  let borders;
  if (selectedCountry.length !== 0) {
    if (selectedCountry.borders.length !== 0) {
      borders = selectedCountry.borders.map((border) => (
        <li key={border.countryCode} className="list-group-item">
          <div className="col d-flex flex-column">
            <div className="d-flex align-items-center flex-wrap">
              <div
                className="feature-icon-small d-inline-flex align-items-center
                justify-content-center fs-4"
              >
                <i className="fa fa-globe" aria-hidden="true" />
              </div>
              <h4 className="fw-semibold mb-0 ps-2">{border.officialName}</h4>
              <span className="text-muted mx-2">
                {border.region}
                :
              </span>
              <span className="text-muted">
                {border.commonName}
              </span>
            </div>
          </div>
        </li>

      ));
    } else {
      borders = <p>No border</p>;
    }

    content = (
      <section className="container px-4 py-5">
        <div className="d-flex justify-content-center pb-2 border-bottom flex-wrap">
          <div
            className="feature-icon-small d-inline-flex align-items-center
                justify-content-center text-bg-info bg-gradient fs-4 rounded-3"
          >
            <i className="fa fa-globe" aria-hidden="true" />
          </div>
          <h2 className="">
            {selectedCountry ? selectedCountry.officialName : ''}
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h3 className="fw-bold">
              <span>Borders: </span>
              {selectedCountry ? selectedCountry.borders.length : 0}
            </h3>
            <p className="text-muted">
              <span>Region: </span>
              {selectedCountry ? selectedCountry.region : ''}
            </p>
            <p className="text-muted">
              <span>Common name: </span>
              {selectedCountry ? selectedCountry.commonName : ''}
            </p>
            <Link to="/" className="btn btn-info btn-lg text-light">Back to home</Link>
          </div>

          <div className="col">
            <h3 className="pb-2 border-bottom">Borders</h3>
            <div className="row row-cols-1 row-cols-sm-12 g-4">
              <ul>
                {borders}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    content = (
      <>
        <p>Please select a country</p>
        <Link to="/" className="btn btn-info btn-lg text-light">Back to home</Link>
      </>
    );
  }

  return (
    <div>
      {content}
      <Countries />
    </div>
  );
};

export default CountryDetails;
