import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';

import PageTitle from './PageTitle';

export default {
  title: 'UI/PageTitle',
  decorators: [withKnobs],
  component: PageTitle
} as ComponentMeta<typeof PageTitle>;

export const Default = () =>{
  const props = {
      title:text('Title','About My Self'),
      subtitle:text("Subtitle","who are in extremely love with eco friendly system")
  }
  return <PageTitle {...props} />
}