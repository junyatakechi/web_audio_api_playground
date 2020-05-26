import * as React from "react";


class App extends React.Component<{}, State> {
  constructor(props: {}, state: State) {
    super(props, state);
    this.state = { err: null };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>test</h1>
        <audio src="start.mp3" type="audio/mpeg"></audio>


        </header>
      </div>
    );
  }

  componentDidMount(){
    console.log("form componentDidMount");
    const audioElement = document.querySelector('audio');
    console.log(audioElement);





  }


  componentDidCatch(err: Error) {
    this.setState({ err });
  }
}

export default App;
