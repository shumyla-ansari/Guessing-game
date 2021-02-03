import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {

  const [showScreen, setShowScreen ] = useState(false);
  const [userChoice, setUserChoice] = useState();

  const startGame = (selectedNumber) => {
    setShowScreen(true)
    setUserChoice(selectedNumber)
  }
  return (
    <View style ={styles.screen}>
      <Header title='Guess a number'/>
    {showScreen?   <GameScreen userChoice={userChoice} />  :
      <StartGameScreen onStartGame={startGame}/> }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
