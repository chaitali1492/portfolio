import React from "react";
import Bounce from 'react-reveal/Bounce';
import classes from "./Features.module.css";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Feature, PageTitle } from "../../ui"; 
import { BsPerson } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import { MdRateReview } from "react-icons/md";
import { CalendarIcon } from '@chakra-ui/icons';
import { PhoneIcon } from '@chakra-ui/icons';
import '@chakra-ui/icons';
import Props from "./type";

const Icons:{[key:string]:React.ReactElement} = {
  'BsPerson':<BsPerson className={classes.svg} />,
  'FaRocket': <FaRocket className={classes.svg} />,
  'GrDiamond':<GrDiamond className={classes.svg} />,
  'CalendarIcon':<CalendarIcon className={classes.svg} />,
  'PhoneIcon':<PhoneIcon className={classes.svg} />,
  'MdRateReview' : <MdRateReview className={classes.svg} />
}



const Features:React.FC<Props> = ({pageTitle, features}) => {
  return (
    <Bounce right>
    <Container centerContent maxW="container.xl" id="feature">
      <div className={classes.featuresPage}>
        <div>
          <PageTitle {...pageTitle}/>
        </div>
        <div>
          <Grid templateColumns={{sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap={6}>
            {features.map(({title, icon, subtitle})=>{
              return (
                <GridItem key={title}>
                  <Feature
                  icon={Icons[icon]}
                  title={title} 
                  subtitle={subtitle}/>
                </GridItem>
              )
            })}
          </Grid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default Features;
