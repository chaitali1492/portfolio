import * as React from "react";


import Header from './components/composition/Header';
import Cover from "./components/composition/Cover";
import Footer from './components/composition/Footer';
import Form from "./components/composition/Form";
import Feature from "./components/composition/Feature";
import Qualification from "./components/composition/Qualification";
import MySelf from "./components/composition/MySelf";
import Services from "./components/composition/Services";
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({ breakpoints })



export const App = () => (
  <ChakraProvider theme={theme}>
  
    <Header />
    <Cover />
    <Services />
    <MySelf />
    <Qualification />
    <Feature />
    <Form />
    <Footer />
  </ChakraProvider>
)
