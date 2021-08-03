import React from "react";
import { Link, Button, Box } from "@chakra-ui/react";
import classes from "./Header.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Navigation } from "./ui";

const HeaderItems = [
  {
    name: "HOME",
    href: "#",
  },
  {
    name: "SERVICE",
    href: "#",
  },
  {
    name: "ABOUT",
    href: "#",
  },
  {
    name: "PROJECTS",
    href: "#",
  },
  {
    name: "CONTACT",
    href: "#",
  },
];

const HeaderList = HeaderItems.map((item) => (
  <li>
    <Link
      color="white"
      paddingX={4}
      _hover={{ color: "#000000", cursor: "pointer" }}
    >
      {item.name}
    </Link>
  </li>
));


function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
    <Box display="flex" justifyContent="space-between">
    <a className={classes.logo}>Resume</a>
      <Button ref={btnRef} onClick={onOpen} className = {classes.ham_button}  >
        <HamburgerIcon width={8} height={8} color="#ffffff" />
      </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#8490ff">
          <DrawerCloseButton size="lg" color="#ffffff" />
          <DrawerHeader />
          <DrawerBody className = {classes.ham_listitem}><ul>{HeaderList}</ul></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Header = () => {
  
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)")

  const renderHeader = () =>{

    if(!isLargerThan720){
      return (
        <DrawerMenu/>
      )
    }

    return (
      <div className={classes.navbar}>
        <a className={classes.logo}>Resume</a>
        <div>
          <ul>
            {HeaderList}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className={classes.header}>
      {
        renderHeader()
      }
    </div>
  );
};

export default Header;
