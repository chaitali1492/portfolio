import React from 'react';
import {Box, Text, Link} from '@chakra-ui/react';
import classes from './ServicesDetails.module.css';
import { Props } from "./type";


const ServicesDetails:React.FC<Props> = ({icon, title, desc}) =>{
    return(
        <Box>
            <Box className = {classes.icon}> {icon} </Box>
            <Link className = {classes.title}> {title} </Link>
            <Text className = {classes.desc}> {desc} </Text>
        </Box>
    )
}

export default ServicesDetails;