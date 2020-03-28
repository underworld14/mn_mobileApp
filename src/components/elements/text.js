import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import { RFValue as fs } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get('window');

function Typography({ type, children, style, size, color }) {
  const textStyles = [
    type === 'thin' && styles.thin,
    type === 'regular' && styles.regular,
    type === 'semibold' && styles.semibold,
    type === 'bold' && styles.bold,
  ];

  const textSize = {
    fontSize: size && fs(size, height),
  };

  const textColor = {
    color,
  };

  return (
    <>
      <Text style={[styles.default, textStyles, textSize, textColor, style]}>{children}</Text>
    </>
  );
}

Typography.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['thin', 'regular', 'semibold', 'bold']),
  style: PropTypes.object,
  size: PropTypes.number,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  default: {
    fontSize: fs(9, height),
  },
  thin: {
    fontSize: fs(9, height),
    fontFamily: 'Poppins-Light',
  },
  regular: {
    fontSize: fs(9, height),
    fontFamily: 'Poppins-Regular',
  },
  semibold: {
    fontSize: fs(9, height),
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontSize: fs(9, height),
    fontFamily: 'Poppins-Bold',
  },
});

export default Typography;
