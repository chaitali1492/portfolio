import React from "react";
import classes from "./Footer.module.css";
import { Text, Stack, HStack, Icon, Container } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const Footer = (props: any) => {
  return (
    <div className={classes.footer}>
      <Container centerContent maxW="container.xl">
        <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing="40px">
          <div>
            <Text className={classes.footertitle}>About Us</Text>
            <Text className={classes.footertext}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur praesentium, laudantium quam animi reiciendis ratione
              modi earum aliquid unde ipsum!
            </Text>
            <Text className={classes.copyright}>
              Copyright &copy; 2021 All rights reserved
            </Text>
          </div>
          <div>
            <Text className={classes.footertitle}>Newsletter</Text>
            <Text className={classes.footertext}>
              Stay Updated with our latest
            </Text>
            <Stack paddingTop="20px">
              <InputGroup size="sm" width="200px" color="white">
                <Input placeholder="Enter E-mail" />
                <InputRightElement
                  children={<ArrowForwardIcon className={classes.svg} />}
                />
              </InputGroup>
            </Stack>
          </div>
          <div>
            <Text className={classes.footertitle}> Follow Us </Text>
            <Text className={classes.footertext}>Let us be Social</Text>
            <HStack spacing="20px" paddingTop="20px">
              <Icon as={FaFacebook} className={classes.socialicon} />
              <Icon as={FaTwitter} className={classes.socialicon} />
              <Icon as={FaInstagram} className={classes.socialicon} />
            </HStack>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Footer;
