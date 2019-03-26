// Libs
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

// Module
import Routes from "@/routes";

describe("Routes", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Routes />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
