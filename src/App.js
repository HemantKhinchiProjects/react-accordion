import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [title, setTitle] = useState(SingleQuestion);

  return <h2>accordion project setup</h2>;
}

export default App;
