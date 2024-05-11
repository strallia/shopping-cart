import { render, screen } from "@testing-library/react";
import ShopItem from "../components/ShopItem/ShopItem";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("ShopItem on ShopPage", () => {
  const props = {
    item: {
      id: 0,
      image: "url",
      title: "title",
      price: 123,
      description: "description",
      quantity: 0,
    },
    setItemsData: vi.fn(),
    isForShopPage: true,
  };
  it("renders an item with title, description, quantity, price, and add to cart button", () => {
    const { container } = render(<ShopItem {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("calls setItemsData when add-to-cart button is clicked", async () => {
    const setItemsData = vi.fn();
    const user = userEvent.setup();
    render(<ShopItem {...props} setItemsData={setItemsData} />);
    const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });
    await user.click(addToCartBtn);
    expect(setItemsData).toHaveBeenCalled();
  });

  it("clicking add-to-cart button resets quantity value to 1", async () => {
    const user = userEvent.setup();
    render(<ShopItem {...props} />);
    const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });
    const quantityValue = screen.getByRole("spinbutton", { name: "Quantity:" });
    await user.click(addToCartBtn);
    expect(quantityValue.value).toBe("1");
  });

  it("renders default quantity value of 1 on mount", () => {
    render(<ShopItem {...props} />);
    const quantityValue = screen.getByRole("spinbutton", { name: "Quantity:" });
    expect(quantityValue.value).toBe("1");
  });
});

describe("ShopItem on CartPage", () => {
  it("renders an item with title, quantity, price, and remove button", () => {
    const props = {
      item: {
        id: 0,
        image: "url",
        title: "title",
        price: 123,
        description: "description",
        quantity: 0,
      },
      setItemsData: vi.fn(),
      isForShopPage: false,
    };
    const { container } = render(<ShopItem {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("if added item with a quantity of 2 on ShopPage, initially renders that item's quantity with value of 2 on mount", () => {
    const props = {
      item: {
        id: 0,
        image: "url",
        title: "title",
        price: 123,
        description: "description",
        quantity: 2,
      },
      setItemsData: vi.fn(),
      isForShopPage: false,
    };
    render(<ShopItem {...props} />);
    const quantity = screen.getByRole("spinbutton", { name: "Quantity:" });
    expect(quantity.value).toBe("2");
  });

  it("calls setItemsData when remove button is clicked", async () => {
    const props = {
      item: {
        id: 0,
        image: "url",
        title: "title",
        price: 123,
        description: "description",
        quantity: 0,
      },
      setItemsData: vi.fn(),
      isForShopPage: false,
    };
    const setItemsData = vi.fn();
    const user = userEvent.setup();
    render(<ShopItem {...props} setItemsData={setItemsData} />);
    const removeBtn = screen.getByRole("button", { name: "Remove" });
    await user.click(removeBtn);
    expect(setItemsData).toHaveBeenCalled();
  });
});
