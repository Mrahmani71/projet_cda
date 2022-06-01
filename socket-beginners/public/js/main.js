// const socket = io()

// socket.on('message', (data) => {
//   document.write(data)
// })

// socket.on("test", (data) => {
//   alert(data)
// })

// emit an event from client
// socket.emit('clientEvent', 'Sent an event from the client!');

// socket.on('broadcast',function(data){
//   document.body.innerHTML = '';
//   document.write(data.description);
// });

// socket.on('newclientconnect',function(data){
//   document.body.innerHTML = '';
//   document.write(data.description);
// });


//------------------------------------------------------ Custom namespace
// var socket = io('/my-namespace');
// socket.on('hi',function(data){
  //    document.body.innerHTML = '';
  //    document.write(data);
  // });
  
//------------------------------------------------------ Custom Rooms
// var socket = io();
// socket.on('connectToRoom',function(data){
  //    document.body.innerHTML = '';
  //    document.write(data);
// });
  
//------------------------------------------------------ Chat app
var socket = io();
let user;

function setUsername() {
  socket.emit('setUsername', document.getElementById("name").value)
}

socket.on('userExists', (data) => {
  document.getElementById('error-container').innerHTML = data
})

socket.on('userSet', (data) => {
  user = data.username;
  document.body.innerHTML = '<div>users : <span id="count"></span></div>\
  <input type="text" id="message">\
  <button type="button" name="button" onclick="sendMessage()">Send</button>\
  <div id="message-container"></div>';
})

function sendMessage() {
  const msg = document.getElementById('message').value;
  if (msg) {
    socket.emit('msg', {message: msg, user : user})
  }
}

socket.on('broadcast',(data) =>{
  console.log('data', data);
  if (user) {
    const count = document.getElementById('count')
    count.value = data.count
  }
});

socket.on ('newmsg', (data) => {
  if(user) {
    document.getElementById('message-container').innerHTML += '<div><b>' + data.user + '</b>: ' + data.message + '</div>'
  }
})