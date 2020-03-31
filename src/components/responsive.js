import { Dimensions } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const height = Dimensions.get('window').height;

const wp = widthPercentageToDP;
const hp = heightPercentageToDP;
const fs = size => RFValue(size, height);

export { wp, hp, fs };
