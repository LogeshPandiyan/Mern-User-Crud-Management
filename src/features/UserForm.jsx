import { useState, useEffect } from "react";

const UserForm = ({ onSubmit, onClose, initialData }) => {
  const [formData, setFormData] = useState({
    userName: "",
    userRole: "",
    userEmail: "",
    userContact: "",
    salary: "",
    street: "",
    city: "",
    district: "",
    state: "",
    country: "",
  });

  const [errors, setErrors] = useState({}); // validation errors

  const allowedFields = [
    "userName",
    "userRole",
    "userEmail",
    "userContact",
    "salary",
    "street",
    "city",
    "district",
    "state",
    "country",
  ];

  // Edit mode → auto fill
  useEffect(() => {
    if (initialData) {
      // Only pick allowed fields
      const filteredData = {};
      allowedFields.forEach((key) => {
        if (initialData[key] !== undefined) filteredData[key] = initialData[key];
      });
      setFormData(filteredData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error when user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let tempErrors = {};
    allowedFields.forEach((key) => {
      if (!formData[key]?.toString().trim()) {
        tempErrors[key] = `${key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())} is required`;
      }
    });

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    // Submit if valid
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh]">
        <h4 className="text-2xl font-semibold mb-6 text-center">User Form</h4>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {allowedFields.map((key) => (
            <div className="flex flex-col" key={key}>
              <label className="mb-1 font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={key === "salary" ? "number" : "text"}
                name={key}
                placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                value={formData[key]}
                onChange={handleChange}
                className={`border p-2 rounded-md w-full ${errors[key] ? "border-red-500" : ""}`}
              />
              {errors[key] && (
                <span className="text-red-500 text-sm mt-1">{errors[key]}</span>
              )}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex gap-3 mt-4 md:col-span-2 justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;