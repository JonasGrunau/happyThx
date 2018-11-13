import React from "react";
import {Button, StyleSheet, View, FlatList, Text} from "react-native";
import {theme} from "../../theme";
const io = require('socket.io-client');

const styles = StyleSheet.create({
    root: {
        padding: theme.spacing.unit * 8
    }
});

export class ReceivedScreen extends React.PureComponent{
    static navigationOptions = {
        title: "Erhalten"
    };

     constructor(props) {
    super(props);
  
    this.state = {
      feed:[]
    };

      this.socket = io('http://ff4656b1.ngrok.io');
  }

  componentDidMount() {
    this.socket.on('channel2', (data) => {
        // console.log('Data recieved from server', data); //this will console 'channel 2'
        var newFeed = []
        newFeed.unshift(data)
        this.setState({feed:data})

        data.forEach( function(element, index) {
          console.log(element)
        });
       
        // console.log("asdf " + this.state)
      });
  }

    render() {
        return (
            <View style={styles.root}>

          <FlatList
          data={this.state.feed}
          renderItem={({item}) => <View>
          <Text>Name:{item.name}</Text>
          <Text>Danke:{item.thx}</Text>
          <Text>Cardtype:{item.card}</Text>
          <Text>Category:{item.category}</Text>
          <Text> </Text>
          <Text> </Text>
          </View>

        }
        />
            </View>
        );
    }
}