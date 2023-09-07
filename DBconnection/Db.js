const mongoose = require('mongoose');

const database = async()=>
{
    const conectionparams = {
        useNewUrlParser: true,     // Use the new URL parser
        useUnifiedTopology: true,
    }
    
    try{
        
        await mongoose.connect('mongodb+srv://saisivas200:O5eb7bG5kskINHIS@cluster0.qphbiob.mongodb.net/?retryWrites=true&w=majority'
        ,conectionparams);
          
        console.log('Database connected successfully')
    }

    catch(error)
    {
       console.log(error)  
    }
}

const userSchema = new mongoose.Schema({
    id : Number,
    name: String,
    email: String,
    age: Number,
  });
  
  // Create a User model
  const User = mongoose.model('userdata', userSchema);

 module.exports = {database,User}
