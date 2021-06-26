import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);
it("should take a snapshot", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment(<Header />)).toMatchSnapshot();
});
