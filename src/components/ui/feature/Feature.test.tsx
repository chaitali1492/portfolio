import React from "react";
import Feature from "./Feature";
import { screen, render } from "@testing-library/react";
import { FeaturesData } from "../../../mock";

const mockData = FeaturesData.features[0];

describe("Feature component", () => {
  
  test("renders feature as title", () => {
    render(<Feature {...mockData} icon={null} />);
    const titleElement = screen.getByText(mockData.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders feature as subtitle", () => {
    render(<Feature {...mockData} icon={null} />);
    const subtitleElement = screen.getByText(mockData.subtitle);
    expect(subtitleElement).toBeInTheDocument();
  });
});
