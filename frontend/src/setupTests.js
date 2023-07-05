// Create a custom test setup file (e.g., setupTests.js)
import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider  } from './context'; // Import the UserAuthProvider from your project

const AllTheProviders = ({ children }) => {
  return (
    <AuthProvider >
      {children}
    </AuthProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Make the customRender function available globally
global.render = customRender;

// You might also need to configure Jest to use this setup file in your Jest configuration
// For example, in your package.json or jest.config.js:
// "jest": {
//   "setupFilesAfterEnv": ["./path/to/setupTests.js"]
// }
