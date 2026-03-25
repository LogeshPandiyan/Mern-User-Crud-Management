import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../services/userServices'
import { Toaster } from 'sonner'
import { successToast } from '../../utils/Toast'




function App() {

  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const userResponse = await getAllUsers();
        setUsers(userResponse.data.data || userResponse.data);
        successToast('User data fetched successfully');
      }
      catch{
        console.log('Error fetching data or network connection failed');
      }
    }
    fetchUsers();
  }, [])

  return (
    <>
     {/* <Toaster position="top-right" /> */}
      <Toaster position="bottom-left" richColors/>

    <div className="user-management-container">
      <h2 className="text-center p-3 text-success">
        User Management
      </h2>
      
      <div className=" table-list">
        <table className="table table-hover">
          <thead className="table-head table-light">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Salary</th>
              <th>Street</th>
              <th>City</th>
              <th>District</th>
              <th>State</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user,index) => (
              <tr key={user._id || user.id}>
                <td>{index +1}</td>
                <td className='user-data text-secondary'>
                  {user.userName || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.userRole || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.userEmail || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.userContact || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.salary || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.street || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.city || ""}
                  </td>
                <td className='user-data text-secondary'>
                  {user.district || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.state || ""}
                </td>
                <td className='user-data text-secondary'>
                  {user.country || ""}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  </>
  )
}

export default App