import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [useNumber, setNumber] = useState(0);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    function pickedNumberHandler(pickedNumber) {
        setNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(rounds) {
        setGameIsOver(true);
        setGuessRounds(rounds);
    }

    function startNewGameHandler() {
        console.log("Start new game");
        setNumber(null);
        setGameIsOver(true);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

    if (useNumber) {
        screen = <GameScreen userNumber={useNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameIsOver && useNumber) {
        screen = <GameOverScreen
            roundsNumber={guessRounds}
            userNumber={useNumber}
            onStartNewGame={startNewGameHandler}
        />
    }

  return (
      <LinearGradient
          colors={['#4e0329', '#ddb52f']}
          style={styles.rootScreen}>
          <ImageBackground
              source={require('./assets/images/background.png')}
              resizeMode={"cover"}
              style={styles.rootScreen}
              imageStyle={styles.backgroundImage}
          >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
          </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
      flex: 1
  },
  backgroundImage: {
      opacity: 0.15
  }
});
