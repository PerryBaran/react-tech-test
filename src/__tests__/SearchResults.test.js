import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const searchResults = [""];

  test("snapshot", () => {
    const { asFragment } = render(<SearchResults searchResults={searchResults}/>);
    expect(asFragment()).toMatchSnapshot();
  })

  test("renders correctly", () => {
    render(<SearchResults searchResults={searchResults}/>);
    const image = screen.getByRole("img");
    
    expect(image).toHaveAttribute("alt", "search result");
  });
});