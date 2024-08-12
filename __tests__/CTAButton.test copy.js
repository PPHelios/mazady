import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import CTAButton from "../components/CTAButton";

describe("CTAButton", () => {
  act(() =>
    test("renders a button", () => {
      render(<CTAButton />);

      const btn = screen.getByText("Add Your Item Now");

      expect(btn).toBeInTheDocument();
    }),
  );
});
