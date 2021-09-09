import React from "react";
import { QualificationData } from "../../../mock";
import { screen, render } from "@testing-library/react";
import Education from "./Education";

const mockData = QualificationData.educations[0];
describe("Education", () => {
  test("renders education as title", () => {
    render(<Education {...mockData} />);
    const titleElement = screen.getByText(mockData.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders education as result", () =>{
      render(<Education {...mockData} />);
      const resultElement = screen.getByText(mockData.result);
      expect(resultElement).toBeInTheDocument();
  });

  test("renders education as session", () =>{
    render(<Education {...mockData} />);
    const sessionElement = screen.getByText(mockData.session);
    expect(sessionElement).toBeInTheDocument();
});
});
