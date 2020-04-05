import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import mycolor from '../theme/color';

function MyStatusBar({ color, dark, ...rest }) {
  return (
    <StatusBar
      // translucent
      {...rest}
      backgroundColor={color ? color : mycolor.primary}
      barStyle={dark ? 'dark-content' : 'light-content'}
    />
  );
}

StatusBar.propTypes = {
  color: PropTypes.string,
  dark: PropTypes.bool,
};

export default MyStatusBar;
