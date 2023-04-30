import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app with intro screen', () => {
  render(<App />);
  const introText = screen.getByText(/A long time ago in a galaxy far, far away/i);
  expect(introText).toBeInTheDocument();
});

test('renders app without intro screen when skip button is clicked', () => {
  render(<App />);
  const skipButton = screen.getByRole('button', { name: /Skip/i });
  fireEvent.click(skipButton);
  const cardsComponent = screen.getByRole('main');
  expect(cardsComponent).toBeInTheDocument();
});

test('search input value changes as user types', () => {
  render(<App />);
  const searchInput = screen.getByLabelText(/name\/model/i)
  fireEvent.change(searchInput, { target: { value: '90' } });
  expect(searchInput.value).toBe('90');
});
