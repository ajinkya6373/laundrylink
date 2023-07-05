import { render, screen } from '@testing-library/react';
import { HomePage } from "../pages";
import {FormInput} from "../components"
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('HOMEPAGE', () => {
  test('renders CART page', () => {
    render(
      <Router>
        <FormInput />
      </Router>
    );
    // Your assertions here
  });

  // Other test cases
});
