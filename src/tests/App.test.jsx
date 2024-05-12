import { render, screen } from "@testing-library/react";
import App from "../App";
import { vi } from "vitest";
import { act } from "react";

vi.mock("react-router-dom", () => {
  const mockOutlet = () => <div role="outlet" />;
  const mockLink = () => <a />;
  return { Link: mockLink, Outlet: mockOutlet };
});

global.fetch = vi.fn().mockResolvedValue();

describe("App component", () => {
  it("fetches data for shop items on mount", () => {
    render(<App />);
    expect(fetch).toHaveBeenCalled();
  });

  it("render Header and Outlet components", () => {
    render(<App />);
    expect(screen.getByRole("banner", { name: "header" })).toBeInTheDocument();
    expect(screen.getByRole("outlet")).toBeInTheDocument();
  });
});
