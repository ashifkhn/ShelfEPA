import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import Chart from "../src/screens/Chart/Chart";


test('Home renders correctly', () => {
  const tree = renderer.create(<Chart />).toJSON();
  expect(tree).toMatchSnapshot();
});