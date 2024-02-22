import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SelectedNumber from '../components/SelectedNumber';
import Card from '../components/Card';
import MainButton from '../components/MainButton.android';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [availableDeviceWidth,SetavailableDeviceWidth]=useState(
    Dimensions.get('window').width)
  const [availableDeviceHeight,SetavailableDeviceHeight]=useState(
    Dimensions.get('window').height)
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  useEffect(()=>{
    const updateLayout=()=>{
        SetavailableDeviceHeight(Dimensions.get('window').height)
        SetavailableDeviceWidth(Dimensions.get('window').width)
    };

    Dimensions.addEventListener('change',updateLayout)
    //cleanup function to avoid unneccesurry rerenders
    return ()=>{
        // Dimensions.removeEventListener('change',updateLayout);
    }
  })
  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds(curRounds => curRounds + 1);
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses
    ]);
  };
  let listContainerStyle = styles.listContainer;

  if(availableDeviceWidth<350){
    listContainerStyle=styles.listContainerBig
  }
  if(availableDeviceHeight<500){
    return(
<View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <View style={styles.rotatecontainer}>
                <View style={styles.innerbutton}>
                    <MainButton onPress={() => {return nextGuessHandler('lower') }}>LOWER</MainButton>
                </View>
                <SelectedNumber>{currentGuess}</SelectedNumber>
                <View style={styles.innerbutton}>
                    <MainButton onPress={() => {return nextGuessHandler('Greater') }} >GREATER</MainButton>
                </View>
         </View>
      <View style={listContainerStyle}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView> */}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>

    );
  }
  return (
    <ScrollView>
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <SelectedNumber>{currentGuess}</SelectedNumber>
      <Card style={styles.buttonContainer}>
                <View style={styles.innerbutton}>
                    <MainButton onPress={() => {return nextGuessHandler('lower') }}>LOWER</MainButton>
                </View>
                <View style={styles.innerbutton}>
                    <MainButton onPress={() => {return nextGuessHandler('Greater') }} >GREATER</MainButton>
                </View>

            </Card>
      <View style={listContainerStyle}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView> */}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  rotatecontainer:{
flexDirection:'row',
justifyContent:'space-evenly',
width:'100%',
alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height>600?20:10,
    width: 400,
    padding:10,
    maxWidth: '90%'
  },
  listContainerBig:{
    flex:1,
    width:'60%',
  },
  listContainer: {
    flex: 1,
    width: '80%'
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default GameScreen;
