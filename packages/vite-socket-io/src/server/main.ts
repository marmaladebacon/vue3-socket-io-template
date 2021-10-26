import fs from 'fs';
import path from 'path';
import express, {Request, Response} from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
//import { createServer as createViteServer } from 'vite'; 
//const { createServer: createViteServer } = require('vite');

let mainLoop:NodeJS.Timer;

async function createCustomServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {});
  const pathAssets = path.join(__dirname+'/../assets');
  console.log(pathAssets);
  app.use('/assets', express.static(pathAssets));
  // Create Vite server in middleware mode. This disables Vite's own HTML
  // serving logic and let the parent server take control.
  //
  // If you want to use Vite's own HTML serving logic (using Vite as
  // a development middleware), using 'html' instead.
  // const vite = await createViteServer({
  //   server: { middlewareMode: 'ssr' }
  // })
  // use vite's connect instance as middleware
  // app.use(vite.middlewares)

  io.on('connection', (socket) => {
    console.log(`connection established ${socket.id}`);
    if(!mainLoop){
      mainLoop = setInterval(()=>{
        
      }, 500);
    }
  });

  app.get('/', async (req, res) => {
    // serve index.html - we will tackle this next
    res.status(200).sendFile(path.join(__dirname+'/../index.html'));
  })

  httpServer.listen(3000);
}

createCustomServer();