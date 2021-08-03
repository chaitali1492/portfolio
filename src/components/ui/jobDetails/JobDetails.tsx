import React from 'react';
import classes from './JobDetails.module.css';
import { Heading, Text, Box } from "@chakra-ui/react";
import Props from './type';

const JobDetails:React.FC<Props>  = ({heading,subtitle,jobTitle,jobDesc}) =>{
    return(
        <Box paddingTop="20px">
            <Heading className={classes.title}> {heading} </Heading>
            <Text className = {classes.subtitle}> {subtitle} </Text>
            <Text className = {classes.jobtitle}> {jobTitle} </Text>
            <Text className= {classes.jobdesc}> {jobDesc} </Text>
        </Box>
    )
};

export default JobDetails;