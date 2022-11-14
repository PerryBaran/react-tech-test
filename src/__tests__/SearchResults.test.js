import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  describe("with non-empty searchResults array", () => {
    const searchResults = ["1", "2"];

    test("snapshot", () => {
      const { asFragment } = render(<SearchResults results={searchResults} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test("renders correctly", () => {
      render(<SearchResults results={searchResults} />);
      const images = screen.getAllByRole("img");

      images.forEach((image, i) => {
        expect(image).toHaveAttribute("alt", "search result");
        expect(image).toHaveAttribute("src", searchResults[i]);
      });
    });
  });

  describe("empty searchResults array", () => {
    const searchResults = [];

    test("snapshot", () => {
      const { asFragment } = render(<SearchResults results={searchResults} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test("renders correctly", () => {
      render(<SearchResults results={searchResults} />);
      const text = screen.getByText(/no results/i);

      expect(text).toBeInTheDocument();
    });
  });
});
