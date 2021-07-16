import React from "react";
import classes from "./Education.module.css";
import { Text, Box } from "@chakra-ui/react";

const Education = (props: any) => {
  return (
    <Box paddingTop="20px">
      <Text className = {classes.title}> {props.title} </Text>
      <Text className = {classes.session}> {props.session} </Text>
      <Text className = {classes.result}> {props.result}  </Text>
    </Box>
  );
};

export default Education;
