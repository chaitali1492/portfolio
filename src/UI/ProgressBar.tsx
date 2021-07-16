import React from "react";
import classes from "./ProgressBar.module.css";
import { Progress, Text, Box } from "@chakra-ui/react";

const ProgressBar = (props: any) => {
  return (
    <Box paddingTop="15px">
      <Text className={classes.name}> {props.name} </Text>
      <Progress
        isAnimated="true"
        borderRadius="1rem"
        className={classes.progress}
        size="sm"
        value={props.value}
      />
    </Box>
  );
};

export default ProgressBar;
