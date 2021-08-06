import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { BsPerson } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import { CalendarIcon } from '@chakra-ui/icons';
import { PhoneIcon } from '@chakra-ui/icons';
import { ChatIcon } from '@chakra-ui/icons';


import Features from './Features';

export default {
  title: 'COMPOSITION/Feature',
  component: Features,
  decorators: [withKnobs],
} as ComponentMeta<typeof Features>;

const icons:any = {
  person:(<BsPerson size="3x"/>),
  calender:(<CalendarIcon size="3x"/>),
  phone:(<PhoneIcon size="3x"/>),
  rocket:(<FaRocket size="3x"/>),
  diamond: (<GrDiamond />),
  chat: (<ChatIcon />)
}

export const Default = () =>{
  const selectedIcon = select("Icon",Object.keys(icons),'person')
  const props = {
      
      title:text("Title","Creative Content Developer"),
      servicedesc:text("Description","All users on My Space will know that there are millions of people out there")
  }
  return <Features {...props} icon={icons[selectedIcon]} />
}


