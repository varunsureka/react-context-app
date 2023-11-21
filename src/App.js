import logo from './logo.svg';
import './App.css';
import A from './A';
import { UserProvider } from './UserContext';
import React,{useState} from 'react';

function App() {
  const [name,setName] = useState('max');
  const nameChangeHandler  =() => {
    setName('sam');
  }
  return (
    <div className="App">
      <UserProvider value={name}>
      <A  />
      <button onClick={nameChangeHandler}>Change Name</button>
      </UserProvider>
    
    </div>
  );
}

export default App;
