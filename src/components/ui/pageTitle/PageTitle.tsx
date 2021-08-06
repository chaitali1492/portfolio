import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import Props from './type';
import classes from "./PageTitle.module.css";

const PageTitle:React.FC<Props> = ({title, subtitle}) => {
  return (
    <div className={classes.titlecontainer}>
      <Heading as="h2" size="xl" color="#222222" width="100%" textAlign="center" fontFamily="'poppins' , sans-serif">
        {title}
      </Heading>
      <Text className={classes.text}>{subtitle}</Text>
    </div>
  );
};

export default PageTitle;
