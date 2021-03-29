import React, {useState} from 'react';
import Wrapper from './components/Wrapper/Wrapper'
import {DataContext} from './data/DataContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <DataContext.Provider value={{count, setCount}}>
      <Wrapper/>
   </DataContext.Provider>
  );
}

export default App;
