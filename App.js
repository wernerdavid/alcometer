import React, {useState} from 'react';
import { Text, ScrollView } from 'react-native';
import {Provider as PaperProvider, Button, TextInput, useTheme} from 'react-native-paper';
import styles from './styles/Style'; 
import RadioButton from './components/RadioButton';
import DropDown from 'react-native-paper-dropdown';


export default function App() {
  const [genderValue, setGenderValue] = useState(1);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);

  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);

  const bottlesList = Array(10)
    .fill('')
    .map((_,i) => ({ label: `${i + 1} bottles`, value: `${i + 1}`}))

    const timeList = Array(20)
    .fill('')
    .map((_,index) => ({ label: `${index + 1} hours`, value: `${index + 1}`}))

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
  

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <Text style={styles.headline1}>Alcometer</Text>
        <Text style={styles.headline2}>Weight</Text>
        <TextInput 
          label='Type in your weight here' 
          mode='outlined' 
          style={styles.textInput} 
          keyboardType='numeric'/>
        <Text style={styles.headline2}>Bottles</Text>
        <DropDown
            mode={'outlined'}
            value={bottles}
            setValue={setBottles}
            list={bottlesList}
            style={styles.dropDown}
            visible={showDropDown1}
            showDropDown={() => setShowDropDown1(true)}
            onDismiss={() => setShowDropDown1(false)}
          />
        <Text style={styles.headline2}>Time</Text>
        <DropDown
            mode={'outlined'}
            value={time}
            setValue={setTime}
            list={timeList}
            style={styles.dropDown}
            visible={showDropDown2}
            showDropDown={() => setShowDropDown2(true)}
            onDismiss={() => setShowDropDown2(false)}
          />
        <Text style={styles.headline2}>Gender</Text>
        <RadioButton 
        options={genderRadioButton} 
        onPress={(value) => {setGenderValue(value)}} 
        defaultValue={1}
        />
        <Text>{genderValue}</Text>
        <Button 
          mode='contained'
          icon='calculator'
          >Calculate
        </Button>
      </ScrollView>
    </PaperProvider>
  );
}

