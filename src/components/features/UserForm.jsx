
import { useEffect, useState } from "react"

const UserForm = ({onSubmit, editUser}) => {

     const initialState = {
          userName:"",
          userRole:"",
          userEmail:"",
          userContact:"",
          salary:"", 
          street:"",
          city:"",
          district:"",
          state:"",
          country:"",
     }

     const [formData , setFormData] = useState(initialState);

     useEffect(() => {
          if(editUser){
               setFormData(editUser)
          }
          else{
               setFormData(initialState)
          }
     },[editUser]);

    const  handleChange = (e) => {
     setFormData({...formData, [e.target.value]: e.target.value});
    } 

    const handleSubmit =(e) => {
     e.preventDefault();
     onsubmit(formData);
    }

    
  return (
    <>
     <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-gray-100 rounded"
    >
      {Object.keys(initialState).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          placeholder={key}
          value={formData[key]}
          onChange={handleChange}
          className="border p-2 rounded"
          required={key !== "salary"}
        />
      ))}

      <button className="col-span-3 bg-green-500 text-white p-2 rounded">
        {editUser ? "Update User" : "Add User"}
      </button>
    </form>
    </>
  )
}

export default UserForm