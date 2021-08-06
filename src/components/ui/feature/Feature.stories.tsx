import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import { BsPerson } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import { CalendarIcon } from '@chakra-ui/icons';
import { PhoneIcon } from '@chakra-ui/icons';
import { ChatIcon } from '@chakra-ui/icons';



import Feature from './Feature';

export default {
  title: 'UI/Feature',
  component: Feature,
  decorators: [withKnobs],
} as ComponentMeta<typeof Feature>;

const icons:any = {
  person:(<BsPerson />),
  calendar:(<CalendarIcon />),
  phone:(<PhoneIcon />),
  rocket:(<FaRocket />),
  diamond:(<GrDiamond />),
  chat:(<ChatIcon />)
}

export const Default = () =>{
  const selectedIcon = select("Icon",Object.keys(icons),'person')
  const props = {
    
      title:text("Title","Expert Technicians"),
      subtitle:text("subtitle","Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!")
  }
  return <Feature {...props} icon={icons[selectedIcon]} />
}


