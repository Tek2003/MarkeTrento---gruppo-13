var mongoose=require('mongoose');
var Schema=mongoose.Schema;

module.exports=mongoose.model('DBTags',new Schema({  
    tags:[String],}));