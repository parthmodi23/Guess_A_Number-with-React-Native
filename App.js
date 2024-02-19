import { StyleSheet,Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState } from 'react';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'
import TitleText from './components/TitleText';

export default  App=()=> {


let [fontLoaded] =useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'), 
  });

  const [userNumber,setUserNumber] = useState()
  const [guessRound,setGuessRound] = useState(0)




  const StartNewGame=()=>{
    setUserNumber (null)
    setGuessRound(0)
  }

const gameOverHandler=(numOfROund)=>{
  setGuessRound(numOfROund)
}
const startGameHandler=(selectednumber)=>{
    setUserNumber(selectednumber); 
  }
 let content=<StartGameScreen onStartGame={startGameHandler}  />

  if(userNumber && guessRound<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRound>0){
    content=<GameOverScreen NumberOfRound={guessRound} SelectedNumber={userNumber} StartNew={StartNewGame}/>
  }

  if(!fontLoaded){
    return <AppLoading/>
  }
  return (
    <View style={styles.MainScreen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1
  },
});
