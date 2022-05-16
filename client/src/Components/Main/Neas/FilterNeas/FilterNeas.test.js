import React from "react";
import { shallow } from "enzyme";
import FilterNeas from "./FilterNeas";

describe("FilterNeas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FilterNeas />);
    expect(wrapper).toMatchSnapshot();
  });
});
