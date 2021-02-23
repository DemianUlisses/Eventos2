const mongoose = require('mongoose');
const {Schema} = mongoose;

const sugestaoSchema = new Schema ({
    nome : {type : String},
    descSugestao :  {type : String},
    data: {type : Date, default: Date.now},
    email:  {type : String},
});


module.exports = mongoose.model('sugestao', sugestaoSchema);