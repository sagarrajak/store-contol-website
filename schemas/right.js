/**
 * Created by SAGAR on 10/16/2016.
 */

var   mongoose  =  require('mongoose');

var  right = mongoose.Schema({
      name : { type:String , require : true }
});
module.exports = {
    schema : right ,
    modal  : mongoose.modal( 'right' , right )
};

