import {Text, View, StyleSheet} from "react-native";

function GuessLogItem({ roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: '#3b021f',
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#ddb52f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    itemText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

