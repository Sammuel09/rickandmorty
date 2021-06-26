import React from "react";
import { render, cleanup } from "@testing-library/react";
import Episodes from "./Episodes";

afterEach(cleanup);
describe("Episodes component", () => {
  afterEach(cleanup);

  const props = {
    episodes: [
      {
        id: 10,
        name: "Close Rick-counters of the Rick Kind",
        air_date: "April 7, 2014",
        episode: "S01E10",
        characters: [
          "https://rickandmortyapi.com/api/character/1",
          "https://rickandmortyapi.com/api/character/2",
        ],
        url: "https://rickandmortyapi.com/api/episode/10",
        created: "2017-11-10T12:56:34.747Z",
      },
    ],
  };
  it("should render Episodes component", () => {
    const { container } = render(<Episodes {...props} />);

    expect(container).toBeInTheDocument();
  });
});
