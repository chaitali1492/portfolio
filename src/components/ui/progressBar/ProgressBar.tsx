import React from "react";
import classes from "./ProgressBar.module.css";
import { Progress, Text, Box } from "@chakra-ui/react";
import { Props } from "./type";

const ProgressBar: React.FC<Props> = ({name, value}) => {
  return (
    <Box paddingTop="15px">
      <Text className={classes.name}> {name} </Text>
      <Progress
        isAnimated={true}
        // hasStripe="true"
        borderRadius="1rem"
        className={classes.progress}
        size="sm"
        value={value}
      />
    </Box>
  );
};

export default ProgressBar;
