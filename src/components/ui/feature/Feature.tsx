import React from "react";
import classes from "./Feature.module.css";
import { GridItem, Box, Link, Text } from "@chakra-ui/react";
import Props from './type';


const Feature:React.FC<Props> = ({icon, title, subtitle}) => {
  return (
    <Box className={classes.featurebox}>
      <Box display="flex" paddingBottom="20px">
        {icon} 
        <Link className={classes.link}> {title} </Link>
      </Box>
      <Box>
        <Text>
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
};

export default Feature;
