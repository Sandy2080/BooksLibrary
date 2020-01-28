import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from '../../atoms/text';

describe('Empty Cart', () => {
  it('renders correctly when cart is empty', () => {
    const tree = renderer.create(<Title.BOLD color="#666">Your cart is empty</Title.BOLD>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
