import * as React from "react";
import { render, screen } from "@testing-library/react";

import PayInput from "./PayInput";

describe("PayInput Component", () => {
  it("renders without error", () => {
    const input = render(<PayInput label='Label' />);
    expect(input).toBeTruthy();
    // const input = screen.getByLabelText('Label')
  });

  it("renders Optional text if input is not required", () => {
    render(<PayInput required={false} />);
    expect(screen.getByText('(optional)')).toHaveTextContent(/optional/i)
  });

  it("allows to add custom class", () => {
    const { container } = render(<PayInput className='customClassName' />);
    expect(container.getElementsByClassName('customClassName').length).toBe(1);
  });

  it("add trailing element", () => {
    const { container } = render(<PayInput trailingElement="AUD" />);
    expect(screen.getByText('AUD')).toHaveTextContent(/AUD/i);
  });

  it("shows error message if error status is true", () => {
    const { container } = render(<PayInput errorMessage="Test error" />);
    expect(screen.getByText('Test error')).toHaveTextContent(/Test error/i);
  });
});
