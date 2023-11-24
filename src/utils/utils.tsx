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

export default screenSize;