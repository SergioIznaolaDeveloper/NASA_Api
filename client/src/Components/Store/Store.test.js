import React from "react";
import { shallow } from "enzyme";
import Store from "./Store";

describe("Store", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Store />);
    expect(wrapper).toMatchSnapshot();
  });
});
