import React, { ReactElement } from "react";
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
import Props, { NavItem } from "./type";


const navClickHandler = (id:string | undefined):void =>{
  if(id===undefined || id===''){
    return;
  }
  const ele = document.getElementById(id);
  if(ele){
    ele.scrollIntoView({block: "start", inline: "start",behavior:"smooth"})
  }
}

const renderNav = (items:NavItem[]):React.ReactElement[]=>{
  return items.map((item) => (
    <li>
      <Link
        color="white"
        paddingX={4}
        _hover={{ color: "#000000", cursor: "pointer" }}
        onClick={()=>navClickHandler(item.scrollTo)}
      >
        {item.name}
      </Link>
    </li>
  ))
}

const DrawerMenu:React.FC<Props> = ({items}) =>{
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
          <DrawerBody className = {classes.ham_listitem}><ul>{renderNav(items)}</ul></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Header:React.FC<Props> = (props) => {
  const {logoText, items} = props;
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)")

  
  const renderHeader = () =>{

    if(!isLargerThan720){
      return (
        <DrawerMenu {...props}/>
      )
    }

    return (
      <div className={classes.navbar}>
        <a className={classes.logo}>{logoText}</a>
        <div>
          <ul>
            {renderNav(items)}
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
