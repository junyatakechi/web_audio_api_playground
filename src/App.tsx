import * as React from "react";
import { css } from "@emotion/core";


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
        </header>

        <div>
          <audio className="audio" src="start.mp3" type="audio/mpeg"></audio>
          <button className="button" data-playing="false" role="switch" aria-checked="false">
            <span>Play/Pause</span>
          </button>
          <input css={volumeStyle} type="range" id="volume" min="0" max="3.4" defaultValue="1" step="0.1" />
        </div>

        <div>
          <audio className="audio" src="ending.mp3" type="audio/mpeg"></audio>
          <button className="button" data-playing="false" role="switch" aria-checked="false">
            <span>Play/Pause</span>
          </button>
          <input css={volumeStyle} type="range" id="volume" min="0" max="3.4" defaultValue="1" step="0.1" />
        </div>





      </div>
    );
  }

  componentDidMount(){
    //console.log("form componentDidMount");
    // const audioElement = document.querySelectorAll('.audio');/////
    // //console.log(audioElement);
    // const contextTracks = [];
    // let context = new AudioContext();
    // let track = context.createMediaElementSource(audioElement[0]);
    // track.connect(context.destination);
    // // select our play button
    // const playButton = document.querySelector('button');
    // playButton.addEventListener('click', function() {
    //   // check if context is in suspended state (autoplay policy)
    //   if (context.state === 'suspended') {
    //       context.resume();
    //   }
    //
    //   // play or pause track depending on state
    //   if (this.dataset.playing === 'false') {
    //       audioElement[0].play();
    //       this.dataset.playing = 'true';
    //   } else if (this.dataset.playing === 'true') {
    //       audioElement[0].pause();
    //       this.dataset.playing = 'false';
    //   }
    //
    // }, false);



    const contextTracks = [];
    const audioElement = document.querySelectorAll('.audio');
    if(audioElement.length >= 1){
      for(var el of audioElement){
        let context = new AudioContext();
        let track = context.createMediaElementSource(el);
        track.connect(context.destination);
        contextTracks.push({"context": context, "element": el, "track": track,});
      }
    }
    //console.log(contextTracks.length);


    if(contextTracks.length >= 1){
      let i = 0;
      //console.log("test");
      const buttons = document.querySelectorAll(".button")
      for(let ct of contextTracks){

        //console.log(ct);
        //let test = i;
        buttons[i].addEventListener('click', function() {
          //console.log(test);
          // check if context is in suspended state (autoplay policy)
          if (ct["context"].state === 'suspended') {
              ct["context"].resume();
          }

          // play or pause track depending on state
          if (this.dataset.playing === 'false') {
              ct["element"].play();
              this.dataset.playing = 'true';
          } else if (this.dataset.playing === 'true') {
              ct["element"].pause();
              this.dataset.playing = 'false';
          }

        }, false);

        i += 1;
      }

    }











    //
    // //音量  最小値がおよそ-3.4で最大値はおよそ3.4です
    // const gainNode = audioContext.createGain();
    // //音声グラフを以前のものから更新する必要があり、入力を gain に接続してから、 gain ノードを出力先に接続します。
    // track.connect(gainNode).connect(audioContext.destination);
    //
    // const volumeControl = document.querySelector('#volume');
    // volumeControl.addEventListener('input', function() {
    //     gainNode.gain.value = this.value;
    // }, false);
    //
    //



  }


  componentDidCatch(err: Error) {
    this.setState({ err });
  }
}

export default App;


const volumeStyle = css({
  margin: "auto",
  appearance: "none",
  position: "relative",
  overflow: "hidden",
  height: "40px",
  width: "200px",
  cursor: "pointer",
  borderRadius: 0,

  "::-webkit-slider-runnable-track": {
      background: "#ddd",
  },
  "::-webkit-slider-thumb": {
      appearance: "none",
      width: 20,
      height: 40,
      background: "#fff",
      boxShadow: "-100vw 0 0 100vw #F64F6B",
      border: "2px solid #999",
  },
  "::-moz-range-track": {
      height: 40,
      background: "#ddd",
  },
  "::-moz-range-thumb": {
      background: "#fff",
      height: 40,
      width: 20,
      border: "3px solid #999",
      borderRadius: "0 !important",
      boxShadow: "-100vw 0 0 100vw #222247",
      boxSizing: "border-box",
  },
  "::-ms-fill-lower": {
      background: "dodgerblue",
  },

  "::-ms-thumb": {
      background: "#fff",
      border: "2px solid #999",
      height: 40,
      width: 20,
      boxSizing: "border-box",
  },

  "::-ms-ticks-after": {
      display: "none",
  },

  "::-ms-ticks-before": {
      display: "none",
  },

  "::-ms-track": {
      background: "#ddd",
      color: "transparent",
      height: 40,
      border: "none",
  },

  "::-ms-tooltip": {
      display: "none",
  },


});
