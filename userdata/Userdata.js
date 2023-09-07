const mongodb = require('../DBconnection/Db');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');


const userdetails = async (req,res) => {
    const { id,name, email, age } = req.body;
  
    try {
      const collection = mongoose.connection.collection('userdata');
  
      // Create a new user document based on the form data
      const newUser = {
        id,
        name,
        email,
        age,
      };
  
      // Insert the user document into the collection
      const result = await collection.insertOne(newUser);
  
      if (result) {
        // User data successfully inserted
        res.status(200).json({ 
          status: "User data successfully added",
          user: newUser,
        });
      } else {
        // Failed to insert user data
        res.status(500).json({ error: 'Failed to add user data' });
      }
    } catch (error) {
      console.error('Error on user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  const usergetdata =async(req,res)=>{

      try{

         const collection = mongoose.connection.collection('userdata')

         // Define a query to filter data based on the provided ID

         const user  =  await collection.find().toArray()
          
         
         res.json(user);
         console.log(user)
        }

      catch(error)
      {
        console.error('Error on user data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  }

  const usergetid = async(req,res)=>
   
  {
    console.log('method')
       const id  = req.params.id
        console.log('id==>',id)
       try
       {
             const collection = mongoose.connection.collection('userdata')

             const user =  await collection.findById(id)

             if(!user)
             {
               return res.status(404).json({error:'Doument not found'})
             }
             res.status(200).json(document)
       }

       catch(error) {
        res.status(500).json({ error: 'Server error' });
    }


  }


  





 module.exports = {userdetails,usergetdata,usergetid};