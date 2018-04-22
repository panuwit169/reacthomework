// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyCvmHWGrNXZdQD2dpmCLtpM7dzNfZbVD1E",
      authDomain: "react-homework-15084.firebaseapp.com",
      databaseURL: "https://react-homework-15084.firebaseio.com",
      projectId: "react-homework-15084",
      storageBucket: "",
      messagingSenderId: "488314186328"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
        <Header title="Message Firebase" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;