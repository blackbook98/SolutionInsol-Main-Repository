import {
   Dimensions,
   Platform,
   PixelRatio 
 } from 'react-native';
    
 
    SCREEN_WIDTH = Dimensions.get('window').width;
    SCREEN_HEIGHT = Dimensions.get('window').height;
    
    const scale_w = SCREEN_WIDTH / 375;
    const scale_h = SCREEN_HEIGHT / 667;
    
    const normalize = (size, type) => {
      const newSize = type === 'Width'? size * scale_w : size * scale_h;
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
      }
    };
export default normalize;