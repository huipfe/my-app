import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('Montpellier est présent dans la page', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Montpellier/i);
//   expect(linkElement).toBeInTheDocument();
// });
