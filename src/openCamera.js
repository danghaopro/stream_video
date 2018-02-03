function openCamera() {
  const constrain = {
    audio: false,
    video: true
  };
  navigator.mediaDevices.getUserMedia(constrain)
    .then((stream) => {
      const video = document.getElementById('localStream');
      video.srcObject = stream;
      video.onloadedmetadata = function() {
        video.play();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = openCamera;
