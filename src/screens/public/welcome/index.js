import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {logo} from '../../../assets';

function Index() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={logo} style={styles.image} />
          <ActivityIndicator size="large" color="white" />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.versionText}> v1.0.0 </Text>
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
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default Index;
