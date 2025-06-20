import React, { useState } from "react";

const BugForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "Low",
    status: "Open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/bugs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Bug created!");
      setFormData({
        title: "",
        description: "",
        severity: "Low",
        status: "Open",
      });
    } else {
      alert("Failed to create bug");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report a New Bug</h2>

      <input
        type="text"
        name="title"
        placeholder="Bug Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Bug Description"
        value={formData.description}
        onChange={handleChange}
      />

      <select name="severity" value={formData.severity} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
        <option>Closed</option>
      </select>

      <button type="submit">Submit Bug</button>
    </form>
  );
};

export default BugForm;
