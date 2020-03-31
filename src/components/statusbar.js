import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import mycolor from '../theme/color';

function MyStatusBar({ color }) {
  return (
    <StatusBar
      translucent
      backgroundColor={color ? color : mycolor.primary}
      barStyle="light-content"
    />
  );
}

StatusBar.propTypes = {
  color: PropTypes.string,
};

export default MyStatusBar;
