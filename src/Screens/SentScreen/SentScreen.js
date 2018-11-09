import React from "react";
import {View, StyleSheet, Button} from "react-native";
import {theme} from "../../theme";

const styles = StyleSheet.create({
    root: {
        padding: theme.spacing.unit * 8
    }
});

export class SentScreen extends React.PureComponent{
    static navigationOptions = {
        title: "Verschickt"
    };

    render() {
        return (
            <View style={styles.root}>
                <Button color={theme.colors.red} title="Karte" onPress={() => true}/>
            </View>
        );
    }
}