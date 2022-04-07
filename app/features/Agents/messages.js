/*
 * Homepage Messages
 *
 * This contains all the text for the Homepage feature.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.features.Homepage';

export default defineMessages({
  pageTitle: {
    id: `${scope}.pageTitle`,
    defaultMessage: 'Valorant',
  },
  pageDescription: {
    id: `${scope}.pageDescription`,
    defaultMessage: 'Home Page',
  },
});
