/**
 * Created by SAGAR on 10/16/2016.
 */
var   mongoose = require('mongoose');
var retailer =  mongoose.Schema({
    name      :   {  type : String , require: true },
    phone_num :   {  type : Number , require : true },
    mail      :   {  type : String , require : true },
    address   :   {  type : String  },
    image     :   {  type : String , require:true  }
});
module.exports = mongoose.model( 'retailer' ,  retailer );





