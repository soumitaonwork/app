const coin_Controller=module.exports;

const coin_service=require("../service/coin_service");

coin_Controller.getCoinValue=async (coin)=>{
    console.log(coin);
    const result=await coin_service.getCoinValue(coin); 
    return result ;
}

