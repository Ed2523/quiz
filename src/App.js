import React, { useState } from 'react'
import './styles/App.css';
import Home from './components/Home'
import QuizHtml from './components/QuizHtml';
import QuizCss from './components/QuizCss';
import Results from './components/results';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [htmlAnswers, setHtmlAnswers] = useState(0)
  const [cssAnswers, setCssAnswers] = useState(0)
  const [QAnswered, setQAnswered] = useState(0)


  return (
    <Router>
      <div className="App">
        <Route path='/' component={Home} exact />
        <Route path='/QuizHtml' render={() => (<QuizHtml htmlAnswers={htmlAnswers} setHtmlAnswers={setHtmlAnswers} QAnswered={QAnswered} setQAnswered={setQAnswered} />)} exact />
        <Route path='/QuizCss' render={() => (<QuizCss cssAnswers={cssAnswers} setCssAnswers={setCssAnswers} QAnswered={QAnswered} setQAnswered={setQAnswered} />)} exact />
        <Route path='/results' render={() => (<Results htmlAnswers={htmlAnswers} cssAnswers={cssAnswers} />)} exact />
      </div>
    </Router>
  );
}

export default App;
