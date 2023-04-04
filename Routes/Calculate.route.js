const express = require("express");
const CalculateRouter = express.Router()

CalculateRouter.post("/",(req,res)=>{
    const {amount,rate,years} = req.body;
    let i = rate/100;
    let Final = amount * ((((1+i) **years)-1)/i)
    let totalAmount = (amount*years).toFixed(2);
    let interestGained = (Final - totalAmount).toFixed(2);
    let maturityValue = (Final).toFixed(2)
    res.send({totalAmount:Number(totalAmount),
        interestGained:Number(interestGained),
        maturityValue:Number(maturityValue)})
  
})

module.exports = {CalculateRouter}