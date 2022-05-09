import React from "react";
import { shallow } from "enzyme";
import Landing from "./Landing";

describe("Landing", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });
});
