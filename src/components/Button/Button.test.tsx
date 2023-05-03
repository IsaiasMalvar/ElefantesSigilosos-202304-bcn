import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a texcontent `create`", () => {
    test("Then it should show the text", () => {
      const routes = [
        {
          path: "/",
          element: <Button text="create" onClick={() => {}} />,
        },
      ];

      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);

      expect(screen.getByText("create")).toBeInTheDocument();
    });
  });
});
