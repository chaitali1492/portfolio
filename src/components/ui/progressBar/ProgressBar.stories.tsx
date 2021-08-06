import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, number} from '@storybook/addon-knobs';

import ProgressBar from './ProgressBar';

export default {
  title: 'UI/ProgressBar',
  decorators: [withKnobs],
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>;

export const Default = () =>{
  const props = {
      name:text('name','Photoshop'),
      value:number("value",80)
  }
  return <ProgressBar {...props} />
}