import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TextInput, View, StyleSheet, Image} from 'react-native';
import {useHistory} from 'react-router-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';

import DatePicker from './DatePicker';
import CurrencyPicker from './CurrencyPicker';

const Form = ({setData}) => {
  const {control, handleSubmit} = useForm();
  const onSubmit = (data) => {
    setData(data);
    history.push('./result');
  };
  let history = useHistory();

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      style={styles.keyboard}>
      <View style={styles.main}>
        <View>
          <Text style={styles.mainTitle}>Order trash</Text>
          <Icon
            style={styles.chevronLeft}
            name="chevron-left"
            size={30}
            color="#FFF"
          />
        </View>
        <View style={styles.upperSide}>
          <View styele={styles.leftBlock}>
            <Text style={styles.wishTitle}>What you want?</Text>
            <Controller
              control={control}
              render={({onChange, wish}) => (
                <TextInput
                  style={styles.wishInput}
                  onChangeText={(wish) => onChange(wish)}
                  value={wish}
                  placeholder={'Perdej v office'}
                  placeholderTextColor={'#808080'}
                />
              )}
              name="Wish"
              defaultValue=""
            />
            <Text style={styles.commentTitle}>Comment</Text>
            <Controller
              control={control}
              render={({onChange, comment}) => (
                <TextInput
                  style={styles.commentInput}
                  onChangeText={(comment) => onChange(comment)}
                  value={comment}
                  placeholder={'Tomorrow I will walk  \nnaked down the street'}
                  placeholderTextColor={'#808080'}
                  numberOfLines={3}
                  multiline={true}
                />
              )}
              name="Comment"
              defaultValue=""
            />
          </View>
          <View styele={styles.rightBlock}>
            <Image
              style={styles.image}
              source={require('../assets/waver.png')}
            />
          </View>
        </View>
        <View style={styles.bottomSide}>
          <Text style={styles.title}>Hashtags #</Text>
          <Controller
            control={control}
            render={({onChange, hashtag}) => (
              <TextInput
                style={styles.hashtagInput}
                onChangeText={(hashtag) => onChange(hashtag.match(/#\w+/g))}
                value={hashtag}
                placeholder={'#office #smell #perdej'}
                placeholderTextColor={'#808080'}
              />
            )}
            name="Hashtags"
            defaultValue=""
          />
          <Text style={styles.title}>Select date WHEN?</Text>
          <Controller
            control={control}
            render={({onChange}) => <DatePicker onChangeDate={onChange} />}
            name={'Date'}
            defaultValue=""
          />
          <Text style={styles.title}>How much you pay?</Text>
          <View style={styles.currencySection}>
            <Controller
              control={control}
              render={({onChange, price}) => (
                <View>
                  <TextInput
                    style={styles.priceInput}
                    onChangeText={(price) => onChange(price)}
                    value={price}
                    placeholder={'150'}
                    placeholderTextColor={'#808080'}
                  />
                </View>
              )}
              name="Price"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({onChange}) => <CurrencyPicker onChange={onChange} />}
              name="Currency"
              defaultValue="dollar"
            />
          </View>
          <View style={styles.button}>
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    backgroundColor: '#000000',
  },
  main: {flex: 1, paddingHorizontal: 10},
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  chevronLeft: {
    position: 'absolute',
    paddingVertical: 17,
    marginLeft: -8,
  },
  upperSide: {flex: 1, flexDirection: 'row'},
  wishTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  wishInput: {
    width: 225,
    color: '#FFFFFF',
    fontSize: 16,
    height: 40,
    backgroundColor: '#292929',
    borderRadius: 5,
  },
  commentTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 10,
  },
  commentInput: {
    width: 225,
    height: 70,
    color: '#FFFFFF',
    backgroundColor: '#292929',
    borderRadius: 5,
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 10,
  },
  image: {
    height: '95%',
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: -10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
  hashtagInput: {
    color: '#FFFFFF',
    fontSize: 16,
    height: 40,
    backgroundColor: '#292929',
    borderRadius: 5,
  },
  priceInput: {
    color: '#FFFFFF',
    fontSize: 16,
    height: 40,
    width: 155,
    backgroundColor: '#292929',
    borderRadius: 5,
  },
  currencySection: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    paddingTop: 30,
  },
});

export default Form;
