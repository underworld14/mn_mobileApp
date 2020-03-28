import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
// import { Text } from 'react-native-paper';
import { logo } from '../../../assets';
import Text from '../../../components/elements/text';

function Index(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 3000);
  }, [props.navigation]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={logo} style={styles.image} />
          <ActivityIndicator size="large" color="white" />
        </View>
        <View style={styles.textWrapper}>
          <Text size={12} color="white">
            v1.0.0
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26C281',
  },
  imageWrapper: {
    flex: 6,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  versionText: {
    color: 'white',
  },
});

export default Index;
