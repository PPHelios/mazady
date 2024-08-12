// import "@testing-library/jest-dom";
// import { act, render, screen } from "@testing-library/react";
// import ProductPage from "../app/(user)/[category]/[id]/page";
// import { useParams } from "next/navigation";
// jest.mock("next/navigation", () => ({
//   useParams: jest.fn(),
// }));
// describe("ProductPage", () => {
//   test("renders a heading", async () => {
//     useParams.mockReturnValue({ id: "6" });

//     await act(async () => render(<ProductPage />));

//     const heading = screen.queryAllByText("Test");
//     const btn = screen.getByTestId("btn");

//     expect(btn).toBeInTheDocument();
//     expect(heading[0]).toBeInTheDocument();
//     expect(heading[0]).toHaveTextContent("Test");
//   });
// });
