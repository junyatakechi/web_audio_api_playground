import React from 'react';


function Control() {
  const audioContext = new AudioContext();
  // get the audio element
  const audioElement = document.querySelector('audio');
  console.log(audioElement);
  // pass it into the audio context
  //const track = audioContext.createMediaElementSource(audioElement);

  return (
    <div className="control">
      <h2>control</h2>
    </div>
  );

}

export default Control;
