import React, { Component } from 'react';
import { Text, Image, Alert, Button, StyleSheet, View } from 'react-native';
import quotes from './quotes.json';
import funnys from './funnys.json'

export default class QuoteKellee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: quotes,
      max: (quotes.length),
      quote: ''
    };
  }

  getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (this.state.max - 0) + 0);
    this.setState({
      quote: this.state.quotes[randomNumber]

    });
  }


  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>
            Things to read on the toilet
          </Text>
        </View>
        <View style={styles.bodyContainer}>

          <Image 
            resizeMode='contain'
            style={styles.image}
            source={require('./funnys/3.jpg')} 
          />
        </View>  
        <View>
          <Button
            style={styles.againButton}
            onPress={() => this.getRandomNumber() }
            title="Again!"
          />
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3d0ff',
  },
  headerContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 5,
    backgroundColor: '#ff00ff',
  },
  bodyContainer: {
    flex: 28,
    justifyContent: 'center',
    flexDirection:'row'
  },
  text: {
    color: 'blue',
    textAlign: 'center'
  },
  image: {
    flex: 1, 
    resizeMode: "contain", 
  },
  againButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'green'
  }
});
