import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage/HomePage";
import { MemoryRouter } from "react-router-dom";

describe("HomePage component", () => {
  it("renders a hero image", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("img", { name: /gold earrings/i })
    ).toBeInTheDocument();
  });
  it("renders a Show Now button", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("button", { name: /Shop now/i })
    ).toBeInTheDocument();
  });
});
