import React from "react";
import { Heading, Text } from "@chakra-ui/react";

import classes from "./PageTitle.module.css";

const PageTitle = (props: any) => {
  return (
    <div className={classes.titlecontainer}>
      <Heading as="h2" size="xl" color="#222222" textAlign="center" fontFamily="'poppins' , sans-serif">
        {props.title}
      </Heading>
      <Text className={classes.text}>{props.subtitle}</Text>
    </div>
  );
};

export default PageTitle;
