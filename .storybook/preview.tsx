import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createClientTheme } from '../themes/createClientTheme';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider theme={createClientTheme()}>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;
