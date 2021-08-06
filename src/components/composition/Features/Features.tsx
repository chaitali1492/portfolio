import React from "react";
import Bounce from 'react-reveal/Bounce';
import classes from "./Features.module.css";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Feature, PageTitle } from "../../ui"; 
import { BsPerson } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import { CalendarIcon } from '@chakra-ui/icons';
import { PhoneIcon } from '@chakra-ui/icons';
import { ChatIcon } from '@chakra-ui/icons';


const Features = () => {
  return (
    <Bounce right>
    <Container centerContent maxW="container.xl" id="feature">
      <div className={classes.featuresPage}>
        <div>
          <PageTitle
            title="Some Features that Made us Unique"
            subtitle="Who are in extremely love with eco friendly system"
          />
        </div>
        <div>
          <Grid templateColumns={{sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap={6}>
            <GridItem >
              <Feature
               icon={<BsPerson className = {classes.svg} />}
               title={"Expert Technicians"} 
               subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!"}/>
            </GridItem>
            <GridItem>
                <Feature
                icon={<CalendarIcon className={classes.svg} />}
                title={"Professional Service"}
                subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!"} />
            </GridItem>
            <GridItem>
                <Feature
                icon={<PhoneIcon className={classes.svg} />}
                title={"Great Support"}
                subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!"} />
            </GridItem>
            <GridItem>
                <Feature
                icon={<FaRocket className={classes.svg} />}
                title={"Technical Skills"}
                subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!"} />
            </GridItem>
            <GridItem>
                <Feature
                icon={<GrDiamond className={classes.svg} />}
                title={"Highly recomended"}
                subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!"} />
            </GridItem>
            <GridItem>
                <Feature
                icon={<ChatIcon className={classes.svg} />}
                title={"Positive Reviews"}
                subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus cumque itaque incidunt, laboriosam deleniti!"} />
            </GridItem>
          </Grid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default Features;
