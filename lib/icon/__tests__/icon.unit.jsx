import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Icon from "../icon";

describe("ixon", () => {
  it("DisplayName", () => {
    const json = renderer.create(<Icon name="zfb"></Icon>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it("onClick", () => {
    const fn = jest.fn()
    const fn2 = jest.fn()
    const component = mount(<Icon name='qq' onClick={fn}></Icon>);
    component.find("svg").simulate("click");
    // expect(fn2).toBeCalled();
    expect(fn).toHaveBeenCalled();
  });
});
