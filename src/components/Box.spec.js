import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Box from "./Box";

describe("Box component", () => {
  afterEach(cleanup);

  const props = {
    name: "Earth",
    dimension: "Replacement Dimension",
    residents: [
      "https://rickandmortyapi.com/api/character/8",
      "https://rickandmortyapi.com/api/character/14",
    ],
    type: "Space station",
  };
  it("should render Box component", () => {
    const { container } = render(<Box {...props} />);

    expect(container).toBeInTheDocument();
  });

  it("asserts the corect classname on the parent div", () => {
    const { container } = render(<Box {...props} />);
    expect(container.firstChild.classList.contains("box-details")).toBe(true);
    expect(container).toBeInTheDocument();
  });

  it("asserts that the props are rendered correctly", () => {
    render(<Box {...props} />);

    const name = screen.getByText(/Earth/i);
    const dimension = screen.getByText(/Replacement Dimension/i);
    const NoOfresidents = screen.getByText(/2/i);
    const type = screen.getByText(/type/i);

    expect(name).toBeInTheDocument();
    expect(dimension).toBeInTheDocument();
    expect(NoOfresidents).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });
});
