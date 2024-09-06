import {View, StyleSheet, Image, Text} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone need <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number
                <Text style={styles.highlightText}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: '#3b021f',
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 20,
        marginVertical: 20,
    },
    highlightText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
})