const mongoose = require("mongoose");

const amountSchema = mongoose.Schema({
    amount:{type:Number, required:true},
    rate:{type:Number, required:true},
    years:{type:Number, required:true},
    },
    {versionKey:false}
    );
    
    const CalculateModel = mongoose.model("calculate", amountSchema);
    
    module.exports = {CalculateModel}