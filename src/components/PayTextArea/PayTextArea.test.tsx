import * as React from "react";
import { render } from "enzyme";

import PayTextArea from "./PayTextArea";

// describe("<PayTextArea>", () => {
// 	it("renders without error", () => {
// 		const wrapper = render(<PayTextArea />);

// 		expect(wrapper.html()?.includes("textarea")).toBeTruthy();
// 	});

// 	it("renders Optional text if input is not required", () => {
// 		const wrapper = render(<PayTextArea required={false} />);

// 		expect(wrapper.html()?.includes("textarea")).toBeTruthy();
// 		expect(wrapper.text()).toContain("optional");
// 	});

// 	it("allows to add custom class", () => {
// 		const wrapper = render(<PayTextArea classNames={{ textarea: "test" }} />);

// 		expect(wrapper.find("textarea").hasClass("test")).toBeTruthy();
// 	});

// 	it("shows error message if error status is true", () => {
// 		const wrapper = render(<PayTextArea errorMessage="Test error" />);

// 		expect(wrapper.find("div").text()).toContain("Test error");
// 	});
// });
