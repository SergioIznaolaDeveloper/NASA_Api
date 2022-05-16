import React from "react";
import { shallow } from "enzyme";
import FormC from "./FormC";

describe("FormC", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormC />);
    expect(wrapper).toMatchSnapshot();
  });
});
