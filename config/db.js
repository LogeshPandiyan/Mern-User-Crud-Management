const mongoose = require ('mongoose');

const myDbConnection = async () => {
     try{
          const conn = await mongoose.connect(process.env.MONGO_URI)
          console.log('MongoDB Connected Successfully!')

          if(!conn){
               console.log('Invalid url!. Please check database url')
          }
     }
     catch(error){
          console.log('MongoDB Connection Failed.')
          process.exit(1)
     }
}

module.exports = myDbConnection;