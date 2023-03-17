import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Countries from './Countries';

const CountryDetails = () => {
  const { code } = useParams();
  const { allCountries } = useSelector((store) => store.countries);
  let selectedCountry = [];

  if (allCountries.length !== 0) {
    const country = allCountries.filter((country) => country.countryCode === code)[0];
    selectedCountry = country.info.length !== 0 ? country.info : [];
  }

  let content;
  let borders;
  if (selectedCountry.length !== 0) {
    if (selectedCountry.borders.length !== 0) {
      borders = selectedCountry.borders.map((border) => (
        <div className="col d-flex flex-column gap-2" key={border.countryCode}>
          <div className="d-flex ">
            <div
              className="feature-icon-small d-inline-flex align-items-center
                justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
            >
              <i className="fa fa-globe" aria-hidden="true" />
            </div>
            <h4 className="fw-semibold mb-0">{border.officialName}</h4>
          </div>
          <div className="ps-5 text-start">
            <span className="text-muted mx-2">
              {border.region}
              :
            </span>
            <span className="text-muted">
              {border.commonName}
            </span>
          </div>
        </div>
      ));
    } else {
      borders = <p>No border</p>;
    }

    content = (
      <section className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">{selectedCountry ? selectedCountry.officialName : ''}</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h3 className="fw-bold">
              Common name:
              {selectedCountry ? selectedCountry.commonName : ''}
            </h3>
            <p className="text-muted">
              Region:
              {selectedCountry ? selectedCountry.region : ''}
            </p>
            <p className="text-muted">
              Borders:
              {selectedCountry ? selectedCountry.borders.length : 0}
            </p>
            <Link to="/" className="btn btn-primary btn-lg">Back to home</Link>
          </div>

          <div className="col">
            <h3 className="pb-2 border-bottom">Borders</h3>
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              {borders}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    content = (
      <>
        <p>Please select a country</p>
        <Link to="/" className="btn btn-primary btn-lg">Back to home</Link>
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
