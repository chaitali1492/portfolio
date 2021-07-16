import * as React from "react";


import Header from './components/Header';
import Cover from "./components/Cover";
import Footer from './components/Footer';
import FormPage from "./components/FormPage";
import Features from "./components/Features";
import QualificationPage from "./components/QualificationPage";
import MySelfPage from "./components/MySelfPage";
import ServicesPage from "./components/ServicesPage";
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
    <ServicesPage />
    <MySelfPage />
    <QualificationPage />
    <Features />
    <FormPage />
    <Footer />
  </ChakraProvider>
)
