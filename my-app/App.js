import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    console.log('Button clicked');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

function App() {
  return (
    <div className="box">
      <h3>Center me</h3>
      <Button />
    </div>
  );
}

export default App;