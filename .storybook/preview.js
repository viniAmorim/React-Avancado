import { addDecorator } from '@storybook/react'
import withGlobalStyles from './withGlobalStyles'

addDecorator(withGlobalStyles);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
