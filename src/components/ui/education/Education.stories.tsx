import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';

import Education from './Education';

export default {
  title: 'UI/Education',
  decorators: [withKnobs],
  component: Education
} as ComponentMeta<typeof Education>;

export const Default = () =>{
  const props = {
      title:text('Title','Masters in Graphic & Fine Arts'),
      session:text("Session","Session : 2010-11"),
      result:text("Result","Result: 5.68 (In the scale of 10)")
  }
  return <Education {...props} />
}