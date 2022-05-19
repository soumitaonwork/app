const express=  require("express")
const router= express.Router()
const coin_controller=require("../controller/coin_controller")

router
.route("/:coinid")
.get(async (req,res)=>{
    const result = await coin_controller.getCoinValue(req.params.coinid);
    res.send(result);   
})
// .post((req,res)=>{
//     res.send(`Hi Post the user with ${req.params.id}`); 
// })
// .put((req,res)=>{
//     res.send(`Hi put the user with ${req.params.id}`); 
// })



// const users=[{name:"Kyle"},{name:"Jenner"}];

// router.param("coin",(req,res,next,coin)=>{
//     req.user=users[id];
//     next();

// })
module.exports =  router;