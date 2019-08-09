import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import FormComponent from './FormComponent';

describe('<FormComponent />', () => {
  it('displays submit', () => {
    const { getByTestId, getByText } = render(<FormComponent />);
    fireEvent.click(getByText("Submit!"));
    expect(getByTestId('submitId')).toHaveTextContent('Submit!');
  });

  it('displays password element', () => {
    const buttonTest = rtl.render(
      <button data-testid="submitId" type="submit">Submit!</button>
    );
  });
});
