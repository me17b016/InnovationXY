const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref : 'users'
  },
  profilephoto : String,
  organisationname: String,
  city : String,
  title : {
    type: String,
    required: true
  },
  body : {
    type : String,
    required : true
  },
  date : {
    type: Date,
    default: Date.now
  },
  tags : [],
  likes: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }],
  comments: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    text: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  }]
})

module.exports = Post = mongoose.model('post', PostSchema);