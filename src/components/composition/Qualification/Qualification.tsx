import React, { Fragment } from "react";
import classes from "./Qualification.module.css";
import {Education, JobDetails, PageTitle} from "../../ui";
import {  Container } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { SimpleGrid, Box } from "@chakra-ui/react"
import Bounce from 'react-reveal/Bounce';
import Props from "./type";


const Qualification:React.FC<Props> = ({pageTitle, jobDetails, educations}) => {

  const renderDevider = (index:number):React.ReactElement | null =>{
    if(index===0){return null}
    return (
      <Box display="flex" justifyContent="center">
        <Divider
          variant="solid"
          orientation="horizontal"
          borderColor="#000000"
          width="70%"
          height="1px"
        />
    </Box>
    )
  }
  return (
    <Bounce left>
    <Container centerContent maxW="container.xl">
      <div className={classes.Qualification}>
        <div>
          <PageTitle {...pageTitle}/>
        </div>
        <div>
          <SimpleGrid
            columns = {{sm:1,md:2}}  spacing="40px"
          >
            <Box>
              {jobDetails.map((jobDetail, index) =>{
                return (
                  <Fragment key={jobDetail.heading}>
                    {renderDevider(index)}
                    <JobDetails {...jobDetail}/>
                  </Fragment>
                  
                )
              })}
              
            </Box>
            <Box>
              {
                educations.map((education, index)=>{
                  return (
                    <Fragment key={education.title}>
                      {renderDevider(index)}
                      <Education {...education} />
                    </Fragment>
                  )
                })
              }
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default Qualification;
