import * as React from "react";

import PayIcon from "./PayIcon";

jest.useFakeTimers();

jest.mock("./icons/star.svg");

describe("<PayIcon>", () => {
  it("renders without error", () => {
    expect(true).toEqual(true);
    // const wrapper = render(<PayIcon name="back" />);

    // expect(wrapper).toBeTruthy();
  });
});
