import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TextInput, View, StyleSheet, Image} from 'react-native';
import {useHistory} from 'react-router-native';

const Form = ({setData}) => {
  let history = useHistory();
  const {control, handleSubmit} = useForm();
  const onSubmit = (data) => {
    setData(data);
    history.push('./result');
  };

  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.title}>Order trash</Text>
      </View>
      <View style={styles.wish}>
        <View style={styles.leftSide}>
          <View style={styles.leftSideUp}>
            <Text style={styles.text}>What you want?</Text>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder={'Perdej v office'}
                  placeholderTextColor={'#808080'}
                />
              )}
              name="Wish"
              defaultValue=""
            />
          </View>
          <View style={styles.leftSideDown}>
            <Text style={styles.text}>Comment</Text>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <TextInput
                  style={styles.comment}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder={'Tomorrow I will walk naked down the street'}
                  placeholderTextColor={'#808080'}
                  numberOfLines={2.5}
                  multiline={true}
                />
              )}
              name="Comment"
              defaultValue=""
            />
          </View>
        </View>
        <View style={styles.rightSide}>
          <Image style={styles.image} source={require('../assets/waver.png')} />
        </View>
      </View>
      <View style={styles.downContent}>
        <Text style={styles.text}>Hashtags #</Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={'#office #smell #perdej'}
              placeholderTextColor={'#808080'}
            />
          )}
          name="Hashtags"
          defaultValue=""
        />
        <Text style={styles.text}>Select date WHEN?</Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={'22.10.2020'}
              placeholderTextColor={'#808080'}
            />
          )}
          name="Date"
          defaultValue=""
        />
        <Text style={styles.text}>How much you pay?</Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={'150'}
              placeholderTextColor={'#808080'}
            />
          )}
          name="Price"
          defaultValue=""
        />
        <View style={styles.button}>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: '5%',
    paddingBottom: '2.5%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    color: '#FFFFFF',
    fontSize: 16,
    borderColor: '#292929',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#292929',
  },
  comment: {
    width: '100%',
    color: '#FFFFFF',
    fontSize: 16,
    borderColor: '#292929',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#292929',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  wish: {
    flex: 0.5,
    flexDirection: 'row',
    minHeight: '15%',
  },
  leftSide: {
    flex: 0.6,
    flexDirection: 'column',
    paddingRight: '3%',
    justifyContent: 'space-between',
  },
  leftSideUp: {
    paddingTop: 15,
  },
  rightSide: {
    flex: 0.4,
    flexDirection: 'column',
    paddingTop: 30,
  },
  downContent: {
    flex: 1.3,
  },
  button: {
    paddingTop: '10%',
  },
});

export default Form;
