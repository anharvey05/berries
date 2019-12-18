import React from 'react';
import Berry from './components/Berry';
import berryapi from './apis/berryapi';

class App extends React.Component {
  state = { index: 1 };

  onNextClick = () => {
    const response = berryapi.get('/' + this.state.index);
    console.log(response);
  };
  
  render() {
    return (
      <div>
        <button onClick={this.onNextClick}>Next</button>
        <Berry /> 
      </div>
    );
  }
}

export default App;
