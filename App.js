import { StyleSheet,Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
export default function App() {

  const  [userNumber,setUserNumber] = useState()

  const startGameHandler=(selectednumber)=>{
    setUserNumber(selectednumber); 
  }
  let content=<StartGameScreen onStartGame={startGameHandler}  />

  if(userNumber){
    content=<GameScreen userChoice={userNumber}/>
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
