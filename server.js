
//Create server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}...`) });


const morgan = require('morgan');
app.use(morgan("dev"));

// for POST 
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin-Headers","Origin,X- requested-With,Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Origin-Methods" , "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
  });
  
  //Error
  app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  })
  
  //middleware in case of - localhost:3000/dfnkjf
  app.use((error,req,res, next)=> {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
  });
