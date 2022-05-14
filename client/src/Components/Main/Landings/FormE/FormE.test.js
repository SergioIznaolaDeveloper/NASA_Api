import React from "react";
import { shallow } from "enzyme";
import FormE from "./FormE";

describe("FormE", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormE />);
    expect(wrapper).toMatchSnapshot();
  });
});
