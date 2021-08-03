import React from "react";
import classes from "./Education.module.css";
import { Text, Box } from "@chakra-ui/react";
import Props from './type';

const Education:React.FC<Props> = ({title, session, result}) => {

  return (
    <Box paddingTop="20px">
      <Text className = {classes.title}> {title} </Text>
      <Text className = {classes.session}> {session} </Text>
      <Text className = {classes.result}> {result}  </Text>
    </Box>
  );
};

export default Education;
