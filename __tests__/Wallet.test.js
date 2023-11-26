import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import Wallet from "../src/screens/Wallet/Wallet";

test('Home renders correctly', () => {
  const tree = renderer.create(<Wallet />).toJSON();
  expect(tree).toMatchSnapshot();
});