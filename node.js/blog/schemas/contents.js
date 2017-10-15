var mongoose = require('mongoose');

//内容的表结构
module.exports = new mongoose.Schema({

    //分类的id（关联字段)
    category:{
        //类型
        type:mongoose.Schema.Types.ObjectId,
        //引用 (引用的是一个model,位于models目录下,这里是Category)
        ref:'Category'
    },

    //内容标题
    title: String,

    //简介
    description:{
        type:String,
        default:''
    },

    //内容
    content:{
        type:String,
        default:''
    }
});