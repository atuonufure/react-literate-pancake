import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Feather';

const CurrencyPicker = ({onChange}) => {
  return (
    <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      style={currencyStyle}
      onValueChange={(value) => onChange(value ? value : 'dollar')}
      items={[
        {label: '₽', value: 'rouble '},
        {label: '€', value: 'euro'},
      ]}
      placeholder={{
        label: '$',
        value: 'dollar',
      }}
      Icon={() => {
        return (
          <Icon
            style={styles.chevronDown}
            name="chevron-down"
            size={15}
            color="#FFF"
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  chevronDown: {position: 'absolute', right: 5, top: 12.5},
});

const currencyStyle = {
  inputIOS: {
    color: '#FFFFFF',
    paddingHorizontal: 10,
    backgroundColor: '#292929',
    borderRadius: 5,
  },
  placeholder: {
    color: '#FFFFFF',
  },
  inputAndroid: {
    height: 40,
    width: 75,
    color: '#FFFFFF',
    paddingHorizontal: 10,
    backgroundColor: '#292929',
    borderRadius: 5,
    marginLeft: 10,
  },
};

export default CurrencyPicker;
