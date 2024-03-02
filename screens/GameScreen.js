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

const renderListItem = (itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{itemData.index + 1}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Hold on!", 'Are you sure that this is correct?', [
        { text: 'My bad!', style: 'cancel' }
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
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
  };

  const isAndroid = Platform.OS === 'android';

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Opponent's Guess</TitleText>
        <SelectedNumber>{currentGuess}</SelectedNumber>
        <Card style={styles.buttonContainer}>
          <View style={styles.innerbutton}>
            <MainButton onPress={() => nextGuessHandler('lower')}>
              LOWER
            </MainButton>
          </View>
          <View style={styles.innerbutton}>
            <MainButton onPress={() => nextGuessHandler('greater')}>
              GREATER
            </MainButton>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={item => item}
            data={pastGuesses}
            renderItem={renderListItem}
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    width: 400,
    padding: 10,
    maxWidth: '90%'
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
