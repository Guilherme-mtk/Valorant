import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import Homepage from '../index';

describe('<Homepage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Homepage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
