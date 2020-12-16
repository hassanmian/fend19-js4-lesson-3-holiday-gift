import React, {useState} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import AgePage from './pages/AgePage';
import HomePage from './pages/HomePage';
import { FormContext } from './contexts/FormContext'
import InterestPage from './pages/InterestPage';
import RelationshipPage from './pages/RelationshipPage';
import ResultPage from './pages/ResultPage';

function App() {
  const [age, setAge] = useState(null)
  const [interest, setInterest] = useState(null)
  const [relationship, setRelationship] = useState(null)
  const [correctStarted, setCorrectStarted] = useState(false)

  const formContextValue = {
    age, setAge,
    interest, setInterest,
    relationship, setRelationship,
    correctStarted, setCorrectStarted
  }
  return (
    <>
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-10">
          {/* <h1>Holiday Gift Generator</h1> */}
          </div>
        <div className="col-md-2">
          <Link to="/">Home</Link>
        </div>

      </div>
    </div>

    <FormContext.Provider value={formContextValue}>
      <Switch>
        <Route path="/result" component={ResultPage} />
        <Route path="/relationship" component={RelationshipPage} />
        <Route path="/interest" component={InterestPage} />
        <Route path="/age" component={AgePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </FormContext.Provider>
    </>
  );
}

export default App;
