import { View, Text, StyleSheet, ScrollView } from 'react-native';

function GuessView({ guessNumber }) {
    return (
        <ScrollView>
            <View style={styles.guessContainer}>
                <Text>Your guess is {guessNumber}</Text>
            </View>
        </ScrollView>
    )
}

export default GuessView;

const styles = StyleSheet.create({
    guessContainer: {
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#4e0329',
        backgroundColor: '#ddb52f',
        padding: 12,
        borderRadius: 8
    }
})