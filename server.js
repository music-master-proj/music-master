// //Create server
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;


//  const { playlistsRouter } = require('./routers/playlists');
//  const { usersRouter } = require('./routers/users');

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }));

//  //Routers
// app.use('/playlists' , playlistsRouter );
// //app.use('/users' , usersRouter);


// //CORS
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Origin-Headers","Origin,X- requested-With,Content-Type, Accept, Authorization");
//     if(req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Origin-Methods" , "PUT, POST, DELETE, GET");
//         return res.status(200).json({});
//     }
//     next();
//   });
  
//   //Error
//   app.use((req, res, next) => {
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
//   })
  
//   //middleware in case of - localhost:3000/dfnkjf
//   app.use((error,req,res, next)=> {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
//   });

//   app.listen(port, () => { console.log(`Listening on port ${port}...`) });



const app = require('./utils/express');
const logger = require('./utils//logs');
const { initConnection } = require('./utils//mongoose');
const port = process.env.PORT || 8080;
initConnection();

app.listen(port , () => logger.info(`Lisining to Server : ${port}`));