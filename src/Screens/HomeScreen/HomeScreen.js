import React from "react";
import {StyleSheet, TouchableHighlight, View, Text} from "react-native";
import {theme} from "../../theme";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    touchable: {
        marginLeft: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 6,
        borderRadius: 90
    },
    button: {
        flex: 1,
        padding: theme.spacing.unit * 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.red,
        borderRadius: 90
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default class HomeScreen extends React.PureComponent {
    static navigationOptions = {
        title: "Home"
    };

    handlePress = id => () => {
        console.log(id, "pressed");
    };

    render() {
        return (
            <View style={styles.root}>
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={this.handlePress(0)}
                    underlayColor={theme.colors.white}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Danke !</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={this.handlePress(1)}
                    underlayColor={theme.colors.white}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Danke ?</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}