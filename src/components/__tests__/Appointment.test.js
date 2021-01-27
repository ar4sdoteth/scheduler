import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from '../Appointment/index';

afterEach(cleanup);

describe("Appointment Tests", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
  it("calls the function", () => {
    const fn = jest.fn();
    fn();
    expect(fn).toHaveBeenCalledTimes(1);
   });
});