import * as React from "react";
import { render } from "@testing-library/react";

import PayButton from "./PayButton";

describe("PayButton Component", () => {
  it("renders without error", () => {
    const button = render(<PayButton />);
    expect(button).toBeTruthy();
  });

  it("has primary class applied", () => {
    const { container } = render(<PayButton color="primary" />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

});
