import * as React from "react";

import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

import { Index } from "./pages/Index";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({ breakpoints })



export const App = () => (
  
  <ChakraProvider theme={theme}>
    <Index />
  </ChakraProvider>
)
