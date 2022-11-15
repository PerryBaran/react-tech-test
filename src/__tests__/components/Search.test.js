import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import * as getImages from "../../requests/getImages";

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

  test("search functionality", async () => {
    const mockReturn = "return";
    const string = "search";
    jest.spyOn(getImages, "default").mockResolvedValue(mockReturn);
    render(<Search setSearchResults={setSearchResults} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(getImages.default).toBeCalledTimes(0);
    expect(setSearchResults).toBeCalledTimes(0);
    fireEvent.change(input, { target: { value: string } });
    fireEvent.click(button);
    await waitFor(() => expect(getImages.default).toBeCalledWith(string));
    await waitFor(() => expect(setSearchResults).toBeCalledWith(mockReturn));
  });
});
