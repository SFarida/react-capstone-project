import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('renders the header correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
