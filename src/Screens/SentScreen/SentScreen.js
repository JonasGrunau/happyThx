import React from "react";
import {View, StyleSheet, Text, Image, TextInput, Button} from "react-native";
import {theme} from "../../theme";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
const io = require('socket.io-client');





var Carousel = require('react-native-carousel');

const styles = StyleSheet.create({
    root: {
        padding: theme.spacing.unit * 8
    },
    container: {
    width: 375,
    height:510,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  form:{
        backgroundColor:"blue"
    },
    containerForm:{
        paddingTop:20,
        paddingLeft:30,
        width: 375,
        height:510,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    ContainerName:{
        flex:1
    },
    ContainerWen:{
        flex:1
    },
    ContainerWas:{
        flex:3
    }
});

export class SentScreen extends React.PureComponent{
    static navigationOptions = {
        title: "Verschicken"
    };

    constructor(props) {
      super(props);
    
      this.state = {

        name:"",
        wen:"",
        was:""

      };

       this.socket = io('http://ff4656b1.ngrok.io');
    this._sendToServer = this._sendToServer.bind(this)

    }

    _sendToServer(){

        var thxObj = {"name":this.state.name, "thx":this.state.wen, "card":this.state.was}
        this.socket.emit('channel-name', thxObj);
    }

    render() {
        return (
            <Carousel width={375} animate={false}>
                <View style={styles.container}>
                    <Image
                        style={{width: 300, height: 410,}}
                        source={require('../../../assets/icons/demo.png')}
                    />
                </View>
                <View style={styles.containerForm}>
                     <View style={styles.ContainerName}>
                        <TextInput
                        onChangeText={(name) => this.setState({name})}
                            styles={styles.name}
                            placeholder="Name"
                        />
                    </View>

                    <View style={styles.ContainerWen}>
                     <TextInput 
                      onChangeText={(wen) => this.setState({wen})}
                        placeholder="Wen"
                    />
                    </View>

                    <View style={styles.ContainerWas}>
                     <TextInput 
                     onChangeText={(was) => this.setState({was})}
                        style={styles.was}
                        placeholder="Was"
                    />

                     <View style={styles.container}>
                    <Button style={{top:30}} title="send" onPress={this._sendToServer}>Senden</Button>                    
                </View>
                    </View>
                </View>
               

            </Carousel>
        );
    }
}