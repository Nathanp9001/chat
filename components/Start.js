import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity } from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState('');

  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Background-Image.png')}
        resizeMode='cover'
        style={[styles.container, styles.image]}
      >
        <View style={styles.menu}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Type your username here'
          />
          <Text>Choose Background Color:</Text>
          <View style={styles.colorSelector}>
            <TouchableOpacity 
              style={[styles.color, styles.black]}
            />
            <TouchableOpacity 
              style={[styles.color, styles.purple,]}
              onPress={() =>
              this.setState({ color: black})
              }
            />
            <TouchableOpacity 
              style={[styles.color, styles.grey]}
            />
            <TouchableOpacity 
              style={[styles.color, styles.green]}
            />
          </View>
          <TouchableOpacity
            style={styles.chatButton}
            title="Start Chatting"
            onPress={() => navigation.navigate('Chat', { name: name, color: this.state.color})}
          />
        </View>
        <Text style={styles.title}>Chat</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  title: {
    fontSize: 100,
    color: '#f5f5f5',
    marginVertical: 150,
  },
  image: {
    width: '100%'
  },
  menu: {
    backgroundColor: '#f5f5f5',
    height: '44%',
    width: '88%',
    alignItems: 'center',
    marginVertical: 25,
  },
  textInput: {
    width: '88%',
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 2,
    opacity: 50,
    color: 'grey',
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },
  colorSelector: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
    height: 10,
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  black: {
    backgroundColor: '#2f2f2f',
  },
  purple: {
    backgroundColor: '#9A8CA9'
  },
  grey: {
    backgroundColor: '#708090'
  },
  green: {
    backgroundColor: '#8fbc8f'
  },
  chatButton: {
    backgroundColor: '#9A8CA9',
    width: '88%',
    height: 40,
    justifyContent: 'center',
    marginVertical: 20,
  }
});

export default Start;