import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { RFValue as fs } from 'react-native-responsive-fontsize';
import PropTypes from 'prop-types';

const { height } = Dimensions.get('window');

function Typography({ type, children, style, size, color }) {
  const textStyles = [
    !type && styles.regular,
    type === 'regular' && styles.regular,
    type === 'thin' && styles.thin,
    type === 'semibold' && styles.semibold,
    type === 'bold' && styles.bold,
  ];

  const textSize = {
    fontSize: size ? fs(size, height) : fs(9, height),
  };

  const textColor = {
    color,
  };

  return (
    <>
      <Text style={[textStyles, textSize, textColor, style]}>{children}</Text>
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
  thin: {
    fontFamily: 'Poppins-Light',
  },
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default Typography;

export const textSize = size => fs(size, height);
