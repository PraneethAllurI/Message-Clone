import React, { useState, useEffect } from 'react'
import './App.css';
import db from './Firebase';
import Message from './Message'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState();

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapShot => {
        setMessages(snapShot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])

  useEffect(() => {
    setUsername(prompt('please enter your name'));
  }, [])


  const sendMesssage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="app">
      <h2 style={{ color: "green" }}>Welcome <span style={{ color: "orange", textTransform: "uppercase" }}> {username} </span> </h2>
      <form className="app__form">
        <FormControl className="app__formControl">

          <Input placeholder="Enter a message.." className="app__input" value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton disabled={!input} type="submit" className="app__iconButton" onClick={sendMesssage}>
            <SendIcon />
          </IconButton>
        </FormControl>

      </form>
      <FlipMove>

        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
