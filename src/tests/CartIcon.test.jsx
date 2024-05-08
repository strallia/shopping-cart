import { render, screen } from "@testing-library/react";
import CartIcon from "../components/CartIcon/CartIcon";

describe("CartIcon component", () => {
  it("renders correctly with cart image and count tracker", () => {
    const { container } = render(<CartIcon />);
    expect(container).toMatchSnapshot();
  });

  it("the count tracker renders 0 by default", () => {
    render(<CartIcon />);
    expect(screen.getByRole("img", { name: "cart total" }));
  });

  it("for a cart with 2 total items, it renders 2 in the count tracker", () => {
    render(<CartIcon totalItemsCount={2} />);
    expect(screen.getByRole("img", { name: "cart total" }).textContent).toMatch(
      2
    );
  });

  it("for a cart with 1 total items, it renders 1 in the count tracker", () => {
    render(<CartIcon totalItemsCount={1} />);
    expect(screen.getByRole("img", { name: "cart total" }).textContent).toMatch(
      1
    );
  });
});
