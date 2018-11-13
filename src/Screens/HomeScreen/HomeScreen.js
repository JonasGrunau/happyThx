import React from "react";
import {StyleSheet, TouchableHighlight, View, Text, Image} from "react-native";
import {theme} from "../../theme";
import {requestCameraPermission} from "../../util";

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
    },
    container:{
        alignItems: "center",
    }
});

export default class HomeScreen extends React.PureComponent {
    static navigationOptions = {
        title: "Home"
    };

    handlePress = id => () => {
        if (id == 0 ){
         this.props.navigation.navigate('SentScreen')
        }else {
        this.props.navigation.navigate('ReceivedScreen')
        }
    };

    render() {
        return (
            <View style={styles.root}>
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={this.handlePress(0)}
                    underlayColor={theme.colors.white}
                >

                    <View style={styles.container}>
                        <Image
                          style={{width: 300, height: 210,}}
                          source={require('../../../assets/icons/danke.png')}
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={this.handlePress(1)}
                    underlayColor={theme.colors.white}
                >
                    <View style={styles.container}>
                        <Image
                          style={{width: 300, height: 210,}}
                          source={require('../../../assets/icons/bekommen.png')}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}