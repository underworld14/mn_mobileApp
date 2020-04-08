import { StatusBar } from 'react-native';
import mycolor from '../theme/color';

const MyStatusBar = (color, dark) => {
  StatusBar.setBackgroundColor(color ? color : mycolor.primary);
  StatusBar.setBarStyle(dark ? 'dark-content' : 'light-content');
};

export default MyStatusBar;
