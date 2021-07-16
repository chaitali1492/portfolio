import React from 'react';
import classes from './JobDetails.module.css';
import { Heading, Text, Box } from "@chakra-ui/react"

const JobDetails = (props:any) =>{
    return(
        <Box paddingTop="20px">
            <Heading className={classes.title}> {props.heading} </Heading>
            <Text className = {classes.subtitle}> {props.subtitle} </Text>
            <Text className = {classes.jobtitle}> {props.jobTitle} </Text>
            <Text className= {classes.jobdesc}> {props.jobDesc} </Text>
        </Box>
    )
};

export default JobDetails;