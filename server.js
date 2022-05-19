const express= require("express");
const app=express();

const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');
const userRouter=require('./router/coin_route')


// app.get('/',(req,res)=>{
//     console.log('Hi');
//     res.send('Hi'); 
// })

app.use('/coin',userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logger);





function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000);