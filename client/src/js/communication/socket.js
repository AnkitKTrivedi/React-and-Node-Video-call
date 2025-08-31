import io from "socket.io-client";

//const socket = io({ path: '/bridge' });

const socket = io("https://react-and-node-video-call.onrender.com", {
  transports: ["websocket"],
  secure: true,
});

export default socket;
