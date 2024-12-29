import { View, Text, StyleSheet } from "react-native";

interface ComponentProps {
    text: String;
}

export default function MyComponent({ text }: ComponentProps) {

    return (
        <View>
            <View style={styles.container}>

                <Text style={styles.mainText}>
                    The Original Hello World from MyComponent!
                </Text>
                <Text>
                    Below is the prop you passed:
                </Text>
                <Text style={styles.PropText}>
                    {text}
                </Text>
            </View>
        </View>
    );
}

// Just styling. :)
const styles = StyleSheet.create({

    container: {
        borderRadius: 25,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    mainText: {
        fontWeight: "bold",
        fontSize: 25,
        borderColor: "black",
        textAlign: "center",

    },
    PropText: {
        fontWeight: "bold",
        fontSize: 25,
        color: "lightgreen",
        textAlign: "center",
    },
});