import React from "react";
import { shallow } from "enzyme";
import FilterLandings from "./FilterLandings";

describe("FilterLandings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FilterLandings />);
    expect(wrapper).toMatchSnapshot();
  });
});
