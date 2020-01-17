import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Dashboard from './components/Dashboard';
import InfoCard from './components/InfoCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('displays dashboard information', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId('dashboard');
})
