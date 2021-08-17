import React from "react";
import classes from "./Services.module.css";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import {PageTitle, ServicesDetails} from '../../ui'
import { FcMultipleDevices } from "react-icons/fc";
import { FcIphone } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import Bounce from 'react-reveal/Bounce';
import Props from "./type";

const Icons:{[key:string]:React.ReactElement} = {
  'FcMultipleDevices':<FcMultipleDevices size="3x" />,
  'FcBiohazard': <FcBiohazard size="3x"/>,
  'FcIphone':<FcIphone size="3x"/>,
  'FcTemplate':<FcTemplate size="3x"/>,
}

const Services:React.FC<Props> = ({pageTitle, services}) => {
  return (
    <Bounce left>
    <Container centerContent maxW="container.xl" id="services">
      <div className={classes.servicepage}>
        <Box paddingBottom="20px">
          <PageTitle
            {...pageTitle}
          />
        </Box>
        <div>
          <SimpleGrid columns={{sm:1,md:2}} spacing="40px">
            {services.map(({title, desc, icon})=>{
              return (
                <ServicesDetails
                title={title}
                key={title}
                desc={desc}
                icon={Icons[icon]}
              />
              )
            })}
            {/* <Box>
              <ServicesDetails
                title="Web Development"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={<FcMultipleDevices size="3x" />}
              />
              <ServicesDetails
                title="Printing"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={<FcBiohazard size="3x" />}
              />
            </Box>
            <Box>
              <ServicesDetails
                title="Mobile Development"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={(<FcIphone size="3x" />)}
              />
              <ServicesDetails
                title="Interaction UI Designing"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iusto rem corporis ad voluptatem cumque libero. Reprehenderit inventore perspiciatis est optio repellendus quaerat ab!"
                icon={<FcTemplate size="3x" />}
              />
            </Box> */}
          </SimpleGrid>
        </div>
      </div>
    </Container>
    </Bounce>
  );
};

export default Services;
