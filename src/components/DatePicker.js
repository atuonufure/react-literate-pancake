import React, {useEffect, useState} from 'react';
import {
  View,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Feather';

const DatePicker = ({onChangeDate}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  let formattedDate = '';
  let month = 0;
  let day = 0;

  if (date.getMonth() + 1 < 10) {
    month = '0' + (date.getMonth() + 1);
  } else {
    month = date.getMonth() + 1;
  }

  if (date.getDate() < 10) {
    day = '0' + date.getDate();
  } else {
    day = date.getDate();
  }

  formattedDate = day + '.' + month + '.' + date.getFullYear();

  useEffect(() => {
    onChangeDate(formattedDate);
  }, [formattedDate, onChangeDate]);

  return (
    <View>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={showDatepicker}>
          <TextInput
            value={formattedDate}
            pointerEvents="none"
            editable={false}
            title="Show date picker!"
            style={styles.dateInput}
          />
          <Icon
            style={styles.calendarIcon}
            name="calendar"
            size={27.5}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          iconSource={Icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateInput: {
    height: 40,
    color: '#FFFFFF',
    fontSize: 16,
    borderColor: '#292929',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#292929',
  },
  calendarIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 5,
  },
});

export default DatePicker;
