import React from "react";
import {createDrawerNavigator, createStackNavigator, createMaterialTopTabNavigator} from "react-navigation";
import {StyleSheet, View, Text} from "react-native";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import {theme} from "./src/theme";
import {SentScreen} from "./src/Screens/SentScreen/SentScreen";
import {ProfileScreen} from "./src/Screens/ProfileScreen/ProfileScreen";
import {LogoutScreen} from "./src/Screens/LogoutScreen/LogoutScreen";
import {ReceivedScreen} from "./src/Screens/ReceivedScreen/ReceivedScreen";

export default class App extends React.PureComponent {
    render() {
        return (
            <RootStack/>
        );
    }
}

const tabs = createMaterialTopTabNavigator({
    SentScreen: SentScreen,
    ReceivedScreen: ReceivedScreen
}, {
    initialRouteName: "SentScreen",
    tabBarOptions: {
        activeTintColor: theme.colors.red,
        inactiveTintColor: theme.colors.red,
        labelStyle: {
            fontSize: 12,
            fontWeight: "bold"
        },
        style: {
            color: theme.colors.red,
            backgroundColor: theme.colors.white,
        },
        pressColor: theme.colors.white,
        indicatorStyle: {
            backgroundColor: theme.colors.red
        }
    }
});

const drawer = createDrawerNavigator({
    Home: HomeScreen,
    ThankYouCards: {
        screen: tabs,
        navigationOptions: {
            title: "Danke-Karten"
        }
    },
    Profile: ProfileScreen,
    Logout: LogoutScreen
}, {
    initialRouteName: "ThankYouCards",
    contentOptions: {
        activeTintColor: theme.colors.red
    }
});

const RootStack = createStackNavigator({
        drawer: {
            screen: drawer,
            navigationOptions: () => ({
                header:
                    <View style={styles.header}>
                        <Text style={styles.headerText}>happy</Text>
                    </View>
            }),
        }
    }, {
        initialRouteName: "drawer",
    }
);

const styles = StyleSheet.create({
    header: {
        height: 88,
        paddingTop: theme.spacing.unit * 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: theme.colors.red
    }
});