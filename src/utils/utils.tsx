import { Dimensions } from 'react-native';

const screenSize = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const screenScale = Dimensions.get('window').scale;
  const fontScale = Dimensions.get('window').fontScale;

  return {
    screenWidth,
    screenHeight,
    screenScale,
    fontScale,
  };
};

export function getDate(param: number) {
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() +param);
  const options = { day: 'numeric', month: 'short' };
  return yesterday.toLocaleDateString(undefined, options);
}

export default screenSize;