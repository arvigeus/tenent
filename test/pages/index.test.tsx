import { render, screen, fireEvent } from "react-testing-library";
import Home from "pages/index";

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it("clicking button triggers alert", () => {
    render(<Home />, {});
    jest.spyOn(window, "alert").mockImplementation();
    fireEvent.click(screen.getByTestId("test-button"));
    expect(window.alert).toHaveBeenCalledWith("Hello, world!");
  });
});
