import { render, screen } from "@testing-library/react";
import CartPage from "../pages/CartPage/CartPage";
import { MockComponentWithOutletContext } from "../utils/MockComponentWithOutletContext";
import { vi } from "vitest";

vi.mock("../../components/ShopItem/ShopItem", () => {
  const mockShopItem = () => <p role="figure" aria-label="shop item" />;
  return mockShopItem;
});

describe("CartPage component when have items in cart", () => {
  it("renders the page title 'Your Cart'", () => {
    const itemsData = [
      { id: 0, quantity: 0 },
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
    ];
    render(
      <MockComponentWithOutletContext context={{ itemsData }}>
        <CartPage />
      </MockComponentWithOutletContext>
    );
    expect(
      screen.getByRole("paragraph", { name: "your cart" })
    ).toBeInTheDocument();
  });

  it("renders only items that have quantity > 0", () => {
    const itemsData = [
      { id: 0, quantity: 0 },
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
    ];
    render(
      <MockComponentWithOutletContext context={{ itemsData }}>
        <CartPage />
      </MockComponentWithOutletContext>
    );
    expect(screen.getAllByRole("figure", { name: "shop item" }).length).toBe(2);
  });

  it("correctly calculates subtotal", () => {
    const itemsData = [
      { id: 0, quantity: 0, price: 100 },
      { id: 1, quantity: 1, price: 200 },
      { id: 2, quantity: 2, price: 300 },
    ];
    render(
      <MockComponentWithOutletContext context={{ itemsData }}>
        <CartPage />
      </MockComponentWithOutletContext>
    );
    expect(
      screen.getByRole("paragraph", { name: "subtotal" }).textContent
    ).toBe("Subtotal: $800");
  });

  it("renders nonfunctional checkout button", () => {});
});

describe("CartPage component when no items in cart", () => {
  it("renders the page title 'Your Cart'", () => {
    const itemsData = [];
    render(
      <MockComponentWithOutletContext context={{ itemsData }}>
        <CartPage />
      </MockComponentWithOutletContext>
    );
    expect(
      screen.getByRole("paragraph", { name: "your cart" })
    ).toBeInTheDocument();
  });

  it("displays 'No items in cart'", () => {
    const itemsData = [];
    render(
      <MockComponentWithOutletContext context={{ itemsData }}>
        <CartPage />
      </MockComponentWithOutletContext>
    );
    expect(
      screen.getByRole("paragraph", { name: "no items" })
    ).toBeInTheDocument();
  });

  it("does not display subtotal", () => {
    const itemsData = [];
    render(
      <MockComponentWithOutletContext context={{ itemsData }}>
        <CartPage />
      </MockComponentWithOutletContext>
    );
    expect(screen.queryByText(/subtotal/i)).toBeNull();
  });
});
