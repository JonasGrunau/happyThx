import React from "react";
import {Button, StyleSheet, View} from "react-native";
import {theme} from "../../theme";

const styles = StyleSheet.create({
    root: {
        padding: theme.spacing.unit * 8
    }
});

export class ReceivedScreen extends React.PureComponent{
    static navigationOptions = {
        title: "Erhalten"
    };

    render() {
        return (
            <View style={styles.root}>
                <Button color={theme.colors.red} title="Karte" onPress={() => true}/>
            </View>
        );
    }
}