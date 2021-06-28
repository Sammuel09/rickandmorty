import { render } from "@testing-library/react";
import App from "./App";

test("renders the App component", () => {
  render(<App />);
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
