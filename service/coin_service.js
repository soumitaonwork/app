const coinService = module.exports;
const https =require("axios");

coinService.getCoinValue=async(coin)=>{
    const getCoinVal=await https.get("https://api.coinbase.com/v2/exchange-rates?currency="+coin);

    return getCoinVal.data

}