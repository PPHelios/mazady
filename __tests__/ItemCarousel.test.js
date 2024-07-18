import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import ItemCarousel from "../components/ItemCarousel";

describe("ItemCarousel", () => {
  act(() =>
    test("renders a div", () => {
      render(<ItemCarousel />);

      const div = screen.getByTestId("div");

      expect(div).toBeInTheDocument();
    }),
  );
});
