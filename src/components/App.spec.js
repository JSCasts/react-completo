import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';

import App from './App';

test('Snapshot', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
