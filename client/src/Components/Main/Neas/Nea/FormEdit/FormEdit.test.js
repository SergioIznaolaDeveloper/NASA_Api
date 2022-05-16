import React from "react";
import { shallow } from "enzyme";
import FormEdit from "./FormEdit";

describe("FormEdit", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
