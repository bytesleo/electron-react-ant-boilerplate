// Libs
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
// Module
import Breadcrumb from "@/components/Home/Breadcrumb";

describe("Component Breadcrumb", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Breadcrumb />);
    expect(toJson(component)).toMatchSnapshot();

  });
});
