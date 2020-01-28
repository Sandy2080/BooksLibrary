import React from 'react';
import Button, { ButtonTheme, ButtonSize } from './index';
import renderer from 'react-test-renderer';

describe('Button Primary', () => {
  it('renders correctly when button is PRIMARY  ', () => {
    const tree = renderer.create(<Button.PRIMARY />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button Rounded', () => {
  it('renders correctly when button is ROUNDED and LARGE', () => {
    const tree = renderer
      .create(<Button.PRIMARY size={ButtonSize.LARGE} theme={ButtonTheme.ROUNDED} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
