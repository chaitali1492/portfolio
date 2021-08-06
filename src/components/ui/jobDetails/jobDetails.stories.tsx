import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs';

import JobDetails from './JobDetails';

export default {
  title: 'UI/Job Details',
  component: JobDetails,
  decorators: [withKnobs],
} as ComponentMeta<typeof JobDetails>;

export const Default = () =>{
  const props = {
      heading:text('Heading','SPONDONIT'),
      subtitle:text("Subtitle","July 2015 to present"),
      jobTitle:text("Title","Creative Content Developer"),
      jobDesc:text("Description","All users on My Space will know that there are millions of people out there")
  }
  return <JobDetails {...props} />
}


