import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

                            //  pass crud  methods
const UserTable = ({ users, onEdit, onDelete, onView }) => {
  return (
    <div className="overflow-x-auto w-full mt-10">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Contact</th>
            <th className="p-2 border">Salary</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">State</th>
            <th className="p-2 border">Country</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="11" className="p-4 text-center text-gray-500">
               -- No Users Found --
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr
                key={user._id}
                className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{user.userName}</td>
                <td className="p-2 border">{user.userRole}</td>
                <td className="p-2 border">{user.userEmail}</td>
                <td className="p-2 border">{user.userContact}</td>
                <td className="p-2 border">{user.salary}</td>
                <td className="p-2 border">{user.city}</td>
                <td className="p-2 border">{user.state}</td>
                <td className="p-2 border">{user.country}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => onView(user)}
                    className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-md text-sm"
                  >
                     <FaEye /> 
                  </button>
                  <button
                    onClick={() => onEdit(user)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 rounded-md text-sm"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-md text-sm"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;