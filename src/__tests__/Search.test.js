import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  test("snapshot", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correctly", () => {
    render(<Search />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
});