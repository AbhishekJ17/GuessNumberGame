import {View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {

    return (
        <Pressable
            style={({pressed}) => pressed && styles.pressed }
            onPress={ onPress }
        >
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16,
        margin: 5,
        backgroundColor: '#4e0329',
        color: 'black',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});