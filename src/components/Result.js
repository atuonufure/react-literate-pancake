import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Result = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Форма отправлена</Text>
      <Text style={styles.textJson}>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  textTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 70,
  },
  textJson: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
