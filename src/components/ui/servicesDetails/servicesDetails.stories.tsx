import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { FcMultipleDevices, FcIphone, FcBiohazard, FcTemplate } from "react-icons/fc";

import ServicesDetails from './ServicesDetails';

export default {
  title: 'UI/Services Details',
  component: ServicesDetails,
  decorators: [withKnobs],
} as ComponentMeta<typeof ServicesDetails>;

const icons:any = {
  multipleDevices:(<FcMultipleDevices size="3x"/>),
  iPhone:(<FcIphone size="3x"/>),
  biohazard:(<FcBiohazard size="3x"/>),
  template:(<FcTemplate size="3x"/>)
}

export const Default = () =>{
  const selectedIcon = select("Icon",Object.keys(icons),'multipleDevices')
  const props = {
      
      title:text("Title","Creative Content Developer"),
      servicedesc:text("Description","All users on My Space will know that there are millions of people out there")
  }
  return <ServicesDetails {...props} icon={icons[selectedIcon]} />
}


