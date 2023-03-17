import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Country from '../components/Countries';

jest.mock('../redux/countries/countriesSlice', () => ({
    __esModule: true,
    getCountries: jest.fn(),
    addCountryInfo: jest.fn(),
}));

const mockStore = configureMockStore([thunk]);

describe('Countries', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            countries: {
                allCountries: [
                    {
                        countryCode: 'AR',
                        name: 'Argentina',
                        info: [],
                    }
                ],
                status: 'succeeded',
                error: null,
            }
        })
    });

    it('should render a country', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Country />
                </Provider>
            </BrowserRouter>
        );
        expect(getByText('Argentina')).toBeInTheDocument();
        expect(getByText('AR')).toBeInTheDocument();
    });
});