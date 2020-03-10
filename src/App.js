import React from 'react';
import './App.css';
import PhoneBookContainer from './components/phoneBook/phoneBookContainer';
import ContactCreatorContainer from './components/contactCreator/contactCreatorContainer';

function App() {
  return (
    <div className="App">
        <ContactCreatorContainer/>
        <PhoneBookContainer/>
    </div>
  );
}

export default App;
