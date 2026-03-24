import { useState } from "react";

const Account = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }

    // Log info to console (mock "account creation")
    console.log("New Account Created:", formData);

    // Save to localStorage (optional)
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Account created successfully (mock)!");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="account-page">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Account;