import React from 'react';
import { action } from '@storybook/addon-actions';

import {LibComponent} from 'example-lib';

export default {
  title: 'LibComponent',
  component: LibComponentStory,
};

export const LibComponentStory = () => <LibComponent>story content</LibComponent>;

