import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import './style.css';
function App() {
  const [Hemant, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {Hemant.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
