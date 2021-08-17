import React from "react";
import classes from "./MySelf.module.css";
import { Container, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Image, Button } from "@chakra-ui/react";
import { PageTitle, ProgressBar } from "../../ui";
import { PhoneIcon } from "@chakra-ui/icons";
import { EmailIcon } from "@chakra-ui/icons";
import Bounce from 'react-reveal/Bounce';
import Props from "./type";


const MySelfPage:React.FC<Props> = ({pageTitle, desc, personalDetails, expertise}) => {
  return (
    <Bounce right>
    <Container centerContent maxW="container.xl" id="myself">
      <div className={classes.MySelf}>
        <div>
          <PageTitle {...pageTitle}/>
        </div>
        <div>
          <SimpleGrid columns={{sm:1,md:2,lg:2}} spacing="40px">
            <Box paddingTop="20px">
              <Text className={classes.text}>
                {desc}
              </Text>
              <Text className={classes.title}> {expertise.title} </Text>
              {expertise.skills.map(({name,value})=>{
                return <ProgressBar value={value} name={name} />
              })}
              
            </Box>
            <Box paddingTop="20px" textAlign="center">
              <Box width="100%" display="flex" justifyContent="center" >
                <Image
                  htmlWidth="75%"
                  maxW={"250px"}
                  src={personalDetails.image}
                  borderRadius="full"
                  alt="profile-picture"
                  paddingBottom="10px"
                />
              </Box>
              <Text className={classes.profileName}>{personalDetails.name} </Text>
              <Text className={classes.profiledetails}>
                {personalDetails.designation}
              </Text>
              <Text className={classes.profiledetails}>
                <PhoneIcon height="20px" width="20px" /> {personalDetails.phone}
              </Text>
              <Text className={classes.profiledetails}>
                <EmailIcon height="20px" width="20px" marginRight="5px" />{" "}
                {personalDetails.email}
              </Text>
              <Button className = {classes.button}> Contact me </Button>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default MySelfPage;
