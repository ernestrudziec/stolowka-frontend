import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

const add = (a, b) => {
  return a + b;
};
it('renders without crash', () => {
  expect(add(1, 15)).toBe(16);
});
