import { render, screen } from "@testing-library/react";
import ShopPage from "../pages/ShopPage/ShopPage";
import { MockComponentWithOutletContext } from "../utils/MockComponentWithOutletContext";

describe("ShopPage component", () => {
  it("renders a list of ShopItem components", () => {
    const itemsData = [{ id: 0 }, { id: 1 }];
    render(
      <MockComponentWithOutletContext context={{ itemsData }}>
        <ShopPage />
      </MockComponentWithOutletContext>
    );
    expect(screen.getAllByRole("figure", { name: "shop item" }).length).toBe(2);
  });

  it("displays an error page when fetching data for shop items fails", () => {
    const itemsData = [];
    const hasFetchError = true;
    render(
      <MockComponentWithOutletContext context={{ itemsData, hasFetchError }}>
        <ShopPage />
      </MockComponentWithOutletContext>
    );
    expect(
      screen.getByRole("main", { name: "shop page error" })
    ).toBeInTheDocument();
  });

  it("displays a loading page while fetching items", () => {
    const itemsData = [{ id: 0 }];
    const loading = true;
    render(
      <MockComponentWithOutletContext context={{ itemsData, loading }}>
        <ShopPage />
      </MockComponentWithOutletContext>
    );
    expect(
      screen.getByRole("main", { name: "shop page loading" })
    ).toBeInTheDocument();
  });
});
