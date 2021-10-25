
import express,{Request, Response} from 'express';
import {createServer} from 'http';
import {Server} from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on('connection', (socket) => {
  
});

app.use((req:Request, res:Response)=>{
  res.sendStatus(203);
});

app.get('/', (req:Request, res:Response) => {
  res.send('<h1>Hello world</h1>');  
});

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});


