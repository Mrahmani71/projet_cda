const path = require('path')
const app = require("express")()
const http = require('http').Server(app)
const express = require("express")
const io = require('socket.io')(http)

// Config Static files
app.use(express.static(path.join(__dirname, "public")))

// Config Route
app.get("/", (req, res) => {
  res.sendFile("index.html")
})

// ------------------------------------------------ default
// let clients = 0
// io.on event handler handles connection, disconnection, etc.
//events in it, using the socket object.
// io.on('connection', (socket) => {

//   console.log('A user Connected');

//   clients++;

//   // Broadcasting means sending a message to all connected clients. Broadcasting can be done at multiple levels. We can send the message to all the connected clients, to clients on a namespace and clients in a particular room. To broadcast an event to all the clients, we can use the io.sockets.emit method.
//   io.sockets.emit('broadcast', { description: clients + ' clients connected!' });
//   // Send message after 4 seconds
//   // setTimeout(() => {
//   //   socket.send('THIS IS A MESSAGE')

//   //   //  can create and fire custom events using the socket.emit function
//   //   socket.emit('test', "hello")
//   // }, 4000)

//   // send an event to everyone, but the client that caused it
//   socket.emit('newclientconnect', { description: 'Hey, welcome!' });
//   socket.broadcast.emit('newclientconnect', { description: clients + ' clients connected!' })



//   // To handle client events, we use the on function
//   socket.on('clientEvent', function (data) {
//     console.log(data);
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//     clients--;
//     io.sockets.emit('broadcast', { description: clients + ' clients connected!' });
//     socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
//   })
// })

//--------------------------------------------- Custom Namespaces
// const nameSpace = io.of('/my-namespace');
// nameSpace.on('connection', (socket) => {
//   console.log("someOne Connected");
//   nameSpace.emit('hi', 'Hello everyONE')
// })

//--------------------------------------------- ROOMS
// var roomno = 1;
// io.on('connection', function(socket){
//    socket.join("room-"+roomno);
//    //Send this event to everyone in the room.
//    io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);

//    socket.leave("room-"+roomno);
// })

//------------------------------------------------------ Chat app
let users = []
let clients = 0
io.on('connection', (socket) => {
  console.log("A user connected");
  clients++;

  io.sockets.emit('broadcast', { count: clients  });
  socket.on('setUsername', (data) => {
    if (users.indexOf(data) > -1) {
      socket.emit('userExists', data + ' username is taken! Try some other username.')
    } else {
      users.push(data)
      socket.emit('userSet', {username: data})
    }
  })

  socket.on("msg", (data) => {
    // Send message to ALL
    io.sockets.emit('newmsg', data)
  })
})


// Config PORT
http.listen(3000, () => {
  console.log('listening on 3000');
})