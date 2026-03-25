const userModel = require ('../models/userModel');

// Create user details
exports.createUsers = async (req, res) => {
     try{
          const createUser = await userModel.create(req.body);
          res.status(201).json({
               success:true,
               statusCode:201,
               message:"User Created Successfully",
               data :createUser
          })
     }
     catch(error){
          res.status(500).json({
               success:false,
               statusCode:500,
               message: error.message || "Failed to Create User"
          })
     }
}

// Read all users lists
exports.getAllUsers = async (req,res) =>{
     try{
          const getAllUsersLists = await userModel.find({})
//          console.log('All Users lists :', getAllUsersLists);

          res.status(200).json({
               success:true,
               statusCode:200,
               message :"User Fetched Successfully",
               count:getAllUsersLists.length,
               data:getAllUsersLists,
          })
     }
     catch(error){
          res.status(500).json({
               success:false,
               statusCode:500,
               message: error.message || " Failed to Fetched User Lists"
          })
     }
} 

// Get single user
exports.getSingleUserDetail = async (req, res) => {
     try{
          const getSingleUser = await userModel.findById(req.params.id, req.body)

          if(!getSingleUser){
               res.status(404).json({
                    success:false,
                    statusCode:404,
                    message : error.error.message || "User Not Found"
               })
          }
          res.status(200).json({
               success:true,
               statusCode:200,
               message:"User Fetched Successfully",
               count :getSingleUser.length,
               data:getSingleUser
          })
     }
     catch(error){
          res.status(500).json({
               success:false,
               statusCode:500,
               message: error.message || "Failed to Fetch User"
          })
     }
}

// Update User
exports.updateUser = async (req, res) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "User Not Found"
      });
    }

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User Updated Successfully",
      data: updateUser
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: error.message || "Failed to Update User"
    });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {

    const deletedUser = await userModel.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User Deleted Successfully",
      data: deletedUser
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      statusCode: 500,
      message: error.message || "Failed to delete user"
    });

  }
}

