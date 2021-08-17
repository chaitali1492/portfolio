import React from "react";
import axios from "axios";
import { FormControl, Container } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import classes from "./Form.module.css";
import { PageTitle } from "../../ui";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Bounce from "react-reveal/Bounce";

interface Props {
  onSubmit: (data:any)=>void
}

const Form: React.FC<Props> = ({onSubmit}) => {
  const [data, setData] = React.useState<any | null>(null);

  const handleSubmit = ():void =>{
    if(onSubmit){
      onSubmit(data);
    }
  }

  return (
    <Bounce left>
      <Container centerContent maxW="container.xl" id="form">
        <div className={classes.formPage}>
          <div>
            <PageTitle
              title="If you need, Just drop us a line"
              subtitle="Who are in extremely love with eco friendly system."
            />
          </div>
          <div className={classes.formcontainer}>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ md: "40px" }}>
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
                  onClick={()=>handleSubmit()}
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

export default Form;
