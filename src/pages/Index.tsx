import * as React from "react";

import Header from "../components/composition/Header";
import Cover from "../components/composition/Cover";
import Footer from "../components/composition/Footer";
import Form from "../components/composition/Form";
import Features from "../components/composition/Features";
import Qualification from "../components/composition/Qualification";
import MySelf from "../components/composition/MySelf";
import Services from "../components/composition/Services";

import {
  CoverData,
  FeaturesData,
  HeaderData,
  MySelfData,
  QualificationData,
  ServicesData,
} from "../mock";
import axios from "axios";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Link } from "@chakra-ui/layout";

export const Index = () => {
  const baseURL = "http://localhost:8001";
  const inquiryURL = `${baseURL}/sendInquiry`;

  const sendInquiry = (data: any) => {
    axios
      .post(inquiryURL, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <AlertTitle  fontSize="lg">
            <Link href="https://github.com/chaitali1492/portfolio" isExternal>Click to go to the source coe</Link>
        </AlertTitle>
      </Alert>
      <Header {...HeaderData} />
      <Cover {...CoverData} />
      <Services {...ServicesData} />
      <MySelf {...MySelfData} />
      <Qualification {...QualificationData} />
      <Features {...FeaturesData} />
      <Form onSubmit={sendInquiry} />
      <Footer />
    </>
  );
};
