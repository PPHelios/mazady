import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import Categories from "../components/Categories";

describe("Categories", () => {
  act(() =>
    test("renders a div", () => {
      render(<Categories />);

      const div = screen.getByTestId("div");

      expect(div).toBeInTheDocument();
    }),
  );
});
