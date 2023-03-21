import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../src/components/Header';
import Card from '../src/components/Card';

describe('<Header />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

const nombre = 'Ruben Rodriguez!';
describe('<Card />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<Card nombre={nombre} />).toJSON();
    });
});