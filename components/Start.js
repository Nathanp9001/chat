import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity } from "react-native";

const backgroundColors = {
  black: { backgroundColor: "#2f2f2f" },
   purple: { backgroundColor: "#9A8CA9" },
   grey: { backgroundColor: "#708090" },
   green: { backgroundColor: "#8fbc8f" },
};

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const { black, purple, grey, green } = backgroundColors;

  return(
    
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Background-Image.png')}
        resizeMode='cover'
        style={[styles.container, styles.image]}
      >
        <Text style={styles.title}>Chat</Text>
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
              onPress={() =>
              setColor(black.backgroundColor)
              }
            />
            <TouchableOpacity 
              style={[styles.color, styles.purple,]}
              onPress={() =>
                setColor(purple.backgroundColor)
              }
            />
            <TouchableOpacity 
              style={[styles.color, styles.grey]}
              onPress={() =>
                setColor(grey.backgroundColor)
              }
            />
            <TouchableOpacity 
              style={[styles.color, styles.green]}
              onPress={() =>
                setColor(green.backgroundColor)
              }
            />
          </View>
          <TouchableOpacity
            style={styles.chatButton}
            title="Start Chatting"
            onPress={() => navigation.navigate('Chat', { name: name, color: color})}
          >
            <Text style={styles.chatButtonText}>
              Start Chatting
            </Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 100,
    color: '#f5f5f5',
    marginVertical: 120,
  },
  image: {
    width: '100%'
  },
  menu: {
    backgroundColor: '#f5f5f5',
    height: '44%',
    width: '88%',
    alignItems: 'center',
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
    height: 10,
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  selectedColor: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#708090',
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
    height: 60,
    justifyContent: 'center',
    marginVertical: 20,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#f5f5f5',
    fontSize: 25,
  }
});

export default Start;