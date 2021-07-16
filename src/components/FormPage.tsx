import React from "react";
import { FormControl, Container } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import classes from "./FormPage.module.css";
import PageTitle from '../UI/PageTitle';
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Bounce from 'react-reveal/Bounce';

const FormPage = () => {
  return (
    <Bounce left>
    <Container centerContent maxW="container.xl">

    <div className={classes.formPage}>
        <div>
          <PageTitle title="If you need, Just drop us a line" subtitle="Who are in extremely love with eco friendly system."  />
        </div>
        <div className={classes.formcontainer}>
          <SimpleGrid columns={{sm:1, md:2}} spacing={{md:"40px"}}>
            <div>
              <FormControl id="first-name" className={classes.forminput}>
                <Input placeholder="Enter your name" />
              </FormControl>
              <FormControl id="e-mail" className={classes.forminput}>
                <Input placeholder="Enter email address" />
              </FormControl>
              <FormControl id="subject" className={classes.forminput}>
                <Input placeholder="Enter your subject" />
              </FormControl>
              </div>
            <div>
              <Textarea
                placeholder="Message"
                className={classes.messageinput}
              />
              <Button
                rightIcon={<ArrowForwardIcon />}
                className={classes.submitbutton}
                variant="outline"
              >
                SEND MESSAGE
              </Button>
            </div>
          </SimpleGrid>
        </div>
    </div>
    </Container>
    </Bounce>
  );
};

export default FormPage;
