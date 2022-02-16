import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, useTheme } from 'react-native-paper';
import RadioButton from './components/RadioButton';
import DropDown from 'react-native-paper-dropdown';
import styles from './styles/Style';
import theme from './styles/Theme';


export default function App() {
  const { colors } = useTheme(theme);
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState('1');
  const [time, setTime] = useState('1');
  const [genderValue, setGenderValue] = useState(1);
  const [result, setResult] = useState(0);

  const [showDropDownBottles, setShowDropDownBottles] = useState(false);
  const [showDropDownTime, setShowDropDownTime] = useState(false);

  const bottlesList = Array(15)
    .fill('')
    .map((_, i) => ({ label: `${i + 1} bottles`, value: `${i + 1}` }))

  const timeList = Array(20)
    .fill('')
    .map((_, index) => ({ label: `${index + 1} hours`, value: `${index + 1}` }))

  const genderRadioButton = [
    {
      label: 'Male',
      value: 1
    },
    {
      label: 'Female',
      value: 2
    }
  ]

  const isNull = (value, message) => {
    if (value.length === 0) {
      alert(message);
      return false;
    }
    return true;
  }

  const isNumeric = (value, message) => {
    if (isNaN(value) === true) {
      alert(message);
      return false;
    }
    return true;
  }

  const getResultColor = () => {
    let color;
    if (result < 0.3) {
      color = 'green';
    } else if (result >= 0.3 && result < 0.5) {
      color = 'orange';
    } else {
      color = 'red';
    }
    return color;
  }

  const calculate = () => {
    if (isNull(weight, "Please type in your weight before calculation!") === false) return;
    const formattedWeight = weight.replace(',', '.');
    if (isNumeric(formattedWeight, "Type in weight as number!") === false) return;

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = formattedWeight / 10;
    const gramsLeft = grams - (burning * time);

    if (genderValue === 1) {
      const resultMale = gramsLeft / (formattedWeight * 0.7);
      if (resultMale < 0) {
        setResult(0);
      } else {
        setResult(resultMale);
      }
    } else {
      const resultFemale = gramsLeft / (formattedWeight * 0.6);
      if (resultFemale < 0) {
        setResult(0);
      } else {
        setResult(resultFemale);
      }
    }
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={[styles.headline1, { color: colors.primary }]}>Alcometer</Text>
          <Text style={styles.headline2}>Weight</Text>
          <TextInput
            label='Type in your weight here (in kg)'
            mode='outlined'
            keyboardType='numeric'
            value={weight}
            onChangeText={setWeight}
          />
          <Text style={styles.headline2}>Bottles</Text>
          <DropDown
            mode={'outlined'}
            value={bottles}
            setValue={setBottles}
            list={bottlesList}
            visible={showDropDownBottles}
            showDropDown={() => setShowDropDownBottles(true)}
            onDismiss={() => setShowDropDownBottles(false)}
          />
          <Text style={styles.headline2}>Time</Text>
          <DropDown
            mode={'outlined'}
            value={time}
            setValue={setTime}
            list={timeList}
            visible={showDropDownTime}
            showDropDown={() => setShowDropDownTime(true)}
            onDismiss={() => setShowDropDownTime(false)}
          />
          <Text style={styles.headline2}>Gender</Text>
          <RadioButton
            options={genderRadioButton}
            onPress={(value) => { setGenderValue(value) }}
            defaultValue={1}
          />
          <Text style={[styles.output, { color: getResultColor() }]}>{result.toFixed(2)}</Text>
          <Button
            mode='contained'
            icon='calculator'
            onPress={calculate}
          >Calculate
          </Button>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

