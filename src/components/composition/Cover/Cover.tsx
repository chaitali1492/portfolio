import React from "react";
import {
  Container,
  Box,
  Image,
  SimpleGrid,
  Text,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import classes from "./Cover.module.css";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Bounce from 'react-reveal/Bounce';

// import dummyimg from "../images/profilepicture.png";

import dummyimg from '../../../images/profilepicture.png';
import Props from "./type";

const breakpoints  = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl" : "96em"
})

const Cover:React.FC<Props> = ({name, designation, description}) => {
  return (
    <Bounce top>
    <div className={classes.cover}>
      <Container centerContent maxW="container.xl" height="100vh" id="cover" >
        <SimpleGrid columns={{sm:1,md:2}} spacing="40px" height="100%" marginTop={{sm:100, md:0}}>
            <Box justifyContent="center" alignItems="center"  flexFlow="column" display="flex" >
              <Image
                src={dummyimg}
                htmlWidth="75%"
                borderRadius="full"
                alt="profile-picture"
                // marginLeft="170px"
                paddingBottom="10px"
              />
            </Box>
            <Box display="flex" justifyContent="center" flexFlow="column" textAlign={["center","left"]}>
              <Heading color="white" className={classes.heading} >
                Hi, I'm <br /> <span>John Andrew</span> <br /> Full Stack Developer
              </Heading>
              <Text className={classes.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque aspernatur iure, facere eaque officiis natus. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                tenetur.
              </Text>

              <Box>
                <Button className={classes.submitbtn}> Let us chat </Button>
              </Box>
            </Box>
          </SimpleGrid>
      </Container>
    </div>
    </Bounce>
  );
};

export default Cover;
