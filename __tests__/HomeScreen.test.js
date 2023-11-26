import "react-native"
import React from "react"
import Home from "../src/screens/Home/Home"
import renderer from "react-test-renderer"

test('Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});