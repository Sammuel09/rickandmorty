import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, screen } from "@testing-library/react";
import Card from "./Card";

afterEach(cleanup);
describe("Card component", () => {
  afterEach(cleanup);

  const props = {
    id: "",
    imageUrl: "",
    name: "Rick Sanchez",
    status: "Alive",
    gender: "Male",
    species: "Poopybutthole",
    location: {
      url: "",
      name: "Earth",
    },
    origin: {
      url: "",
      name: "unknown",
    },
    type: "Genetic experiment",
  };

  it("should render Card component", () => {
    const { container } = render(<Card {...props} />, {
      wrapper: MemoryRouter,
    });

    expect(container).toBeInTheDocument();
  });

  it("asserts that the props are rendered correctly", () => {
    render(<Card {...props} />, {
      wrapper: MemoryRouter,
    });

    const displayedImage = document.querySelector("img");
    const name = screen.getByText(/Rick Sanchez/i);
    const status = screen.getByText(/Alive/i);
    const gender = screen.getByText(/Male/i);
    const species = screen.getByText(/Poopybutthole/i);
    const locationName = screen.getByText(/Earth/i);
    const originName = screen.getByText(/unknown/i);
    const type = screen.getByText(/Genetic experiment/i);

    expect(displayedImage.src).toContain(props.imageUrl);
    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(species).toBeInTheDocument();
    expect(locationName).toBeInTheDocument();
    expect(originName).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });
});
