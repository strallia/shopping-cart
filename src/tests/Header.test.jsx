import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../utils/routes";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
  it("renders correctly with logo and navigation links", () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("img", { name: "logo" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "shop" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "cart" })).toBeInTheDocument();
  });

  it("renders CartIcon component", () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole("button", { name: "cart button" })
    ).toBeInTheDocument();
  });

  it("clicking Home nav link renders HomePage outlet component", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    const homeLink = screen.getByRole("link", { name: "home" });
    await user.click(homeLink);
    expect(screen.getByRole("main", { name: "home page" })).toBeInTheDocument();
  });

  it("clicking Shop nav link renders ShopPage outlet component", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "shop" });
    await user.click(shopLink);
    expect(
      screen.getByRole("main", { name: "shop page loading" })
    ).toBeInTheDocument();
  });

  it("clicking Cart nav link renders CartPage outlet component", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    const cartLink = screen.getByRole("link", { name: "cart" });
    await user.click(cartLink);
    expect(screen.getByRole("main", { name: "cart page" })).toBeInTheDocument();
  });
});
