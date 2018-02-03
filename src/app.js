const openStream = require('./openStream');

const $ = require('jquery');
// openStream();

const Peer = require('simple-peer');

const p = new Peer({
  initiator: location.hash === '#1',
  trickle: false
});
p.on('signal', (token) => {
  var strToken = JSON.stringify(token);
  $('#txtMySignal').val(strToken);
});
p.on('connect', () => {
  console.log('connected');
  setInterval(() => {
    p.send(Math.random());
  }, 2000);
});
p.on('data', (data) => {
  console.log('NHAN DU LIEU: ' + data);
});
$('#btnConnect').click(() => {
  const friendSign = JSON.parse($('#txtFriendSignal').val());
  p.signal(friendSign);
})
