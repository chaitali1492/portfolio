import React from "react";
import Bounce from 'react-reveal/Bounce';
import classes from "./Feature.module.css";
import { Container, Text } from "@chakra-ui/react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { PageTitle } from "../../ui"; 
import { BsPerson } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import { CalendarIcon } from '@chakra-ui/icons';
import { PhoneIcon } from '@chakra-ui/icons';
import { ChatIcon } from '@chakra-ui/icons';


const Feature = () => {
  return (
    <Bounce right>
    <Container centerContent maxW="container.xl">
      <div className={classes.featuresPage}>
        <div>
          <PageTitle
            title="Some Features that Made us Unique"
            subtitle="Who are in extremely love with eco friendly system"
          />
        </div>
        <div>
          <Grid templateColumns={{sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap={6}>
            <GridItem className={classes.featurebox}>
              <Box display="flex" paddingBottom="20px">
                <BsPerson className = {classes.svg} /> <Link className = {classes.link}> Expert Technicians </Link>
              </Box>
              <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!</Text>
              </Box>
            </GridItem>
            <GridItem className={classes.featurebox}>
              <Box display="flex" paddingBottom="20px">
                <CalendarIcon className = {classes.svg} /> <Link className = {classes.link}> Professional Service </Link>
              </Box>
              <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!</Text>
              </Box>
            </GridItem>
            <GridItem className={classes.featurebox}>
              <Box display="flex" paddingBottom="20px">
                <PhoneIcon className = {classes.svg} /> <Link className = {classes.link}> Great Support </Link>
              </Box>
              <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!</Text>
              </Box>
            </GridItem>
            <GridItem className={classes.featurebox}>
              <Box display="flex" paddingBottom="20px">
                <FaRocket className = {classes.svg} /> <Link className = {classes.link}> Technical Skills </Link>
              </Box>
              <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!</Text>
              </Box>
            </GridItem>
            <GridItem className={classes.featurebox}>
              <Box display="flex" paddingBottom="20px">
                <GrDiamond className = {classes.svg} /> <Link className = {classes.link}> Highly recomended </Link>
              </Box>
              <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!</Text>
              </Box>
            </GridItem>
            <GridItem className={classes.featurebox}>
              <Box display="flex" paddingBottom="20px">
                <ChatIcon className = {classes.svg} /> <Link className = {classes.link}> Positive Reviews </Link>
              </Box>
              <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!</Text>
              </Box>
            </GridItem>
          </Grid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default Feature;
