import React from "react";
import classes from "./QualificationPage.module.css";
import PageTitle from "../UI/PageTitle";
import JobDetails from "../UI/JobDetails";
import Education from "../UI/Education";
import {  Container } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react"
import Bounce from 'react-reveal/Bounce';


const QualificationPage = () => {
  return (
    <Bounce left>
    <Container centerContent maxW="container.xl">
      <div className={classes.Qualification}>
        <div>
          <PageTitle
            title="My Qualifications"
            subtitle="Who are in extremely love with eco friendly system"
          />
        </div>
        <div>
          <SimpleGrid
            columns = {{sm:1,md:2}}  spacing="40px"
          >
            <Box>
              <JobDetails
                heading="spondonit"
                subtitle="July 2015 to present"
                jobTitle="Creative Content Developer"
                jobDesc="All users on My Space will know that there are millions of people out there"
              />
              <Box display="flex" justifyContent="center">
                <Divider
                  variant="solid"
                  orientation="horizontal"
                  borderColor="#000000"
                  // marginLeft = "90px"
                  width="70%"
                  height="1px"
                />
              </Box>
              
              <JobDetails
                heading="codepixar"
                subtitle="May 2013 to present"
                jobTitle="UI/UX Designer"
                jobDesc="All users on My Space will know that there are millions of people out there"
              />
            </Box>
            <Box>
              <Education
                title="Masters in Graphic & Fine Arts"
                session="Session : 2010-11"
                result="Result : 5.68 (In the scale of 10.00)"
              />
              <Box display="flex" justifyContent="center">
                <Divider
                  variant="solid"
                  orientation="horizontal"
                  borderColor="#000000"
                  // marginLeft = "90px"
                  width="70%"
                  height="1px"
                />
              </Box>
              <Education
                title="Bachelors in Graphics & UI/UX"
                session="Session : 2006-09"
                result="Result : 7.00 (In the scale of 10.00)"
              />
              <Box display="flex" justifyContent="center">
                <Divider
                  variant="solid"
                  orientation="horizontal"
                  borderColor="#000000"
                  // marginLeft = "90px"
                  width="70%"
                  height="1px"
                />
              </Box>
              <Education
                title="Diploma in Fine Arts & Printing"
                session="Session : 2003-06"
                result="Result : 6.65 (In the scale of 10.00)"
              />
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default QualificationPage;
