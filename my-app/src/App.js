import React from 'react';
import './App.css';
import FormikFormComponent from './components/FormComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <FormikFormComponent />
      </div>
    );
  }
}

export default App;
