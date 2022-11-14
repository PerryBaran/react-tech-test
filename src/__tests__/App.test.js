import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })

  test("nasa logo", () => {
    render(<App />);
    const logo = screen.getByAltText("NASA logo");
    
    expect(logo).toHaveAttribute("src", "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg");
  });
});