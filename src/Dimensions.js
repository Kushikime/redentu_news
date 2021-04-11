//Packages
import {Dimensions, PixelRatio} from 'react-native';
//Get the current device window width and height in dp
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

//Set mockup width in dp example IphoneXS 414
export const MOCKUP_WIDTH = 375;
//Set mockup height in dp example IphoneXS 896
export const MOCKUP_HEIGHT = 812;

//Converts dp from mockup to current device
export const wp = mockupWidth => {
  if (MOCKUP_WIDTH > DEVICE_WIDTH) {
    return PixelRatio.roundToNearestPixel(
      mockupWidth * (Math.round((DEVICE_WIDTH / MOCKUP_WIDTH) * 1000) / 1000),
    );
  } else {
    return PixelRatio.roundToNearestPixel(
      mockupWidth * (DEVICE_WIDTH / MOCKUP_WIDTH),
    );
  }
};
//1280 x 720
export const hp = mockupHeight => {
  if (MOCKUP_HEIGHT > DEVICE_HEIGHT) {
    return PixelRatio.roundToNearestPixel(
      mockupHeight *
        (Math.round((DEVICE_HEIGHT / MOCKUP_HEIGHT) * 1000) / 1000),
    );
  } else {
    return PixelRatio.roundToNearestPixel(
      mockupHeight * (DEVICE_HEIGHT / MOCKUP_HEIGHT),
    );
  }
};

export const fontSizeToDP = mockupHeight => {
  if (MOCKUP_HEIGHT > DEVICE_HEIGHT) {
    return PixelRatio.roundToNearestPixel(
      mockupHeight *
      (Math.round((DEVICE_HEIGHT / MOCKUP_HEIGHT) * 1000) / 1000),
    );
  } else {
    return PixelRatio.roundToNearestPixel(
      mockupHeight * (DEVICE_HEIGHT / MOCKUP_HEIGHT),
    );
  }
};