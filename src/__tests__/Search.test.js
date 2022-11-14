import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  let setSearchResults;

  beforeEach(() => {
    setSearchResults = jest.fn();
  });

  test("snapshot", () => {
    const { asFragment } = render(
      <Search setSearchResults={setSearchResults} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correctly", () => {
    render(<Search setSearchResults={setSearchResults} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toHaveTextContent("search");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("submit button", async () => {
    render(<Search setSearchResults={setSearchResults} />);
    const button = screen.getByRole("button");

    expect(setSearchResults).toBeCalledTimes(0);
    fireEvent.click(button);
    await waitFor(() => expect(setSearchResults).toBeCalledTimes(1));
  });
});
