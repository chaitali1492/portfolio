import React from "react";
import classes from "./MySelf.module.css";
import { Container, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Image, Button } from "@chakra-ui/react";
import { PageTitle, ProgressBar } from "../../ui"; 
// import ProgressBar from "../UI/ProgressBar";
import { PhoneIcon } from "@chakra-ui/icons";
import { EmailIcon } from "@chakra-ui/icons";
// import profilepicture from "../images/profilepicture.png";
import profilepicture from '../../../images/profilepicture.png'
import Bounce from 'react-reveal/Bounce';


const MySelfPage = () => {
  return (
    <Bounce right>
    <Container centerContent maxW="container.xl" id="myself">
      <div className={classes.MySelf}>
        <div>
          <PageTitle
            title="About Myself"
            subtitle="who are in extremely love with eco friendly system"
          />
        </div>
        <div>
          <SimpleGrid columns={{sm:1,md:2,lg:2}} spacing="40px">
            <Box paddingTop="20px">
              <Text className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus dignissimos unde eos officia illo aspernatur
                dolores repellendus, recusandae veritatis, magnam eum officiis
                reprehenderit explicabo sint asperiores similique dolore quas
                perferendis ratione expedita, facilis sunt consequatur. Animi
                incidunt architecto sed quia.
              </Text>
              <Text className={classes.title}> Tools Expertness </Text>
              <ProgressBar value={85} name="After effects" />
              <ProgressBar value={80} name="Photoshop" />
              <ProgressBar value={40} name="Illustrator" />
              <ProgressBar value={70} name="Sublime" />
              <ProgressBar value={75} name="Sketch" />
            </Box>
            <Box paddingTop="20px" textAlign="center">
              <Box width="100%" display="flex" justifyContent="center" >
                <Image
                  htmlWidth="75%"
                  maxW={"250px"}
                  src={profilepicture}
                  borderRadius="full"
                  alt="profile-picture"
                  // marginLeft={{md:"170px"}}
                  paddingBottom="10px"
                />
              </Box>
              <Text className={classes.profileName}> John Andrew </Text>
              <Text className={classes.profiledetails}>
                {" "}
                Interactive Designer{" "}
              </Text>
              <Text className={classes.profiledetails}>
                <PhoneIcon height="20px" width="20px" /> (012)+88 017 635 9754
              </Text>
              <Text className={classes.profiledetails}>
                <EmailIcon height="20px" width="20px" marginRight="5px" />{" "}
                john_andrew@gmail.com
              </Text>
              <Button className = {classes.button}> Hire me </Button>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default MySelfPage;
