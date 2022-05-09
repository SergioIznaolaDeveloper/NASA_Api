import React from "react";
import { shallow } from "enzyme";
import Nea from "./Nea";

describe("Nea", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Nea />);
    expect(wrapper).toMatchSnapshot();
  });
});
