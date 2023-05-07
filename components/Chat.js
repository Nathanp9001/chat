import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { query, collection, orderBy, onSnapshot, addDoc } from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
  const { name, color, userID } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsubMessages = onSnapshot(q, (docs) => {
    let newMessages = [];
    docs.forEach(doc => {
    newMessages.push({
      _id: doc.id,
      ...doc.data(),
      createdAt: new Date(doc.data().createdAt.toMillis())
      })
    })
    setMessages(newMessages);
    })
    return () => {
    if (unsubMessages) unsubMessages();
    }
  }, []);

  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  }

  // change appearance of chat bubbles
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  return (
   <View style={[styles.container, {backgroundColor: color}]}>
     <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: userID,
          name: name
        }}
      />
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 }
});

export default Chat;