const playVideo = require('./playVideo');

function openStream() {
  const constrain = {
    audio: false,
    video: true
  };
  navigator.mediaDevices.getUserMedia(constrain)
    .then((stream) => {
      playVideo(stream, 'localStream');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = openStream;
