import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../apis/apiServices";
import { successToast, errorToast } from "../utils/Toast";
import { IoMdAdd } from "react-icons/io";
import AddButton from "../components/Button"

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [quickAdd, setQuickAdd] = useState(false); // flag for 2-field quick add

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res?.data?.data || []);
    } catch (error) {
      console.log("Error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD
  const handleAdd = () => {
    setEditUser(null);
    setQuickAdd(true); // quick add mode
    setShowForm(true);
  };

  // SUBMIT (CREATE / UPDATE)
  const handleSubmit = async (data) => {
  try {
    if (editUser) {
      await updateUser(editUser._id, data);
      successToast('User Updated Successfully');
    } else {
      await createUser(data); // call your apiServices createUser
      successToast('User Created Successfully');
    }
    setShowForm(false);
    fetchUsers();
  } catch (error) {
    // Check if it's duplicate email error from backend
    if (error.response?.status === 400) {
      errorToast(error.response.data.message); // shows "userEmail already exists"
    } else {
      errorToast('Something went wrong!');
    }
  }
};

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
      successToast("User Deleted Successfully");
    } catch (error) {
      console.log("Delete error", error);
      errorToast("Failed to delete user");
    }
  };

  // EDIT
  const handleEdit = (user) => {
    setEditUser(user);
    setQuickAdd(false); // full form in edit mode
    setShowForm(true);
  };

  // VIEW
  const handleView = (user) => {
    console.log("View User:", user);
  };

  return (
    <div className="mt-5 px-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h4 className="text-3xl font-bold">User Management</h4>

        <AddButton 
        onClick={handleAdd}
        text="Add User"
        >
          <IoMdAdd />
        </AddButton>

      </div>

      {/* User Form as Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <UserForm
            onSubmit={handleSubmit}
            onClose={() => { setShowForm(false); setQuickAdd(false); }}
            initialData={editUser}
            quickAdd={quickAdd} // pass flag
          />
        </div>
      )}

      {/* User Table */}
      <UserTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default UserPage;