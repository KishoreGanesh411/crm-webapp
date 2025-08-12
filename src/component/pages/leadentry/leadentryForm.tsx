import React, { useState } from "react";

const LeadEntryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead Submitted:", formData);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Lead Entry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />
        </div>
        <input
          type="text"
          name="mobile"
          placeholder="Enter mobile number"
          value={formData.mobile}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadEntryForm;
