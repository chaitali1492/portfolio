import React from 'react';
import {Box, Text, Link} from '@chakra-ui/react';
// import classes from "./ServicesDetails.module.css";
import classes from './ServicesDetails.module.css';
import { Props } from "./type";


const ServicesDetails:React.FC<Props> = ({icon, title, servicedesc}) =>{
    return(
        <Box>
            <Box className = {classes.icon}> {icon} </Box>
            <Link className = {classes.title}> {title} </Link>
            <Text className = {classes.servicedesc}> {servicedesc} </Text>
        </Box>
    )
}

export default ServicesDetails;