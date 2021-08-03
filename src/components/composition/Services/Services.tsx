import React from "react";
import classes from "./Services.module.css";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import {PageTitle, ServicesDetails} from '../../ui'
import { FcMultipleDevices } from "react-icons/fc";
import { FcIphone } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import Bounce from 'react-reveal/Bounce';


const Services = () => {
  return (
    <Bounce left>
    <Container centerContent maxW="container.xl">
      <div className={classes.servicepage}>
        <Box paddingBottom="20px">
          <PageTitle
            title="Have a Look at my Services"
            subtitle="who are in extremely love with eco friendly system"
          />
        </Box>
        <div>
          <SimpleGrid columns={{sm:1,md:2}} spacing="40px">
            <Box>
              <ServicesDetails
                title="Web Design"
                servicedesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={<FcMultipleDevices size="3x" />}
              />
              <ServicesDetails
                title="Print Design"
                servicedesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={<FcBiohazard size="3x" />}
              />
            </Box>
            <Box>
              <ServicesDetails
                title="Mobile Design"
                servicedesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={(<FcIphone size="3x" />)}
              />
              <ServicesDetails
                title="Interaction Design"
                servicedesc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={<FcTemplate size="3x" />}
              />
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default Services;
