import { View, StyleSheet } from "react-native";


function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
    },
})