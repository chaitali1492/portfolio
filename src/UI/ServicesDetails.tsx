import React from 'react';
import {Box, Text, Link} from '@chakra-ui/react';
import classes from "./ServicesDetails.module.css";

export interface ServiceDetailsProps {
    title:string
    servicedesc:string
    icon:React.Component
}

const ServicesDetails = (props:ServiceDetailsProps) =>{
    return(
        <Box>
            <Box className = {classes.icon}> {props.icon} </Box>
            <Link className = {classes.title}> {props.title} </Link>
            <Text className = {classes.servicedesc}> {props.servicedesc} </Text>
        </Box>
    )
}

export default ServicesDetails;