import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password_hash: "",
    fname: "",
    mname: "",
    lname: "",
    contact_number: "",
    user_id: ""
  });
  const [message, setMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/register-temp`, form);
      setMessage("Verification email sent! Check your inbox.");
    } catch (err) {
      console.error(err);
      setMessage(err?.response?.data?.error || "Error sending verification email");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Student Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password_hash}
          onChange={(e) => setForm({ ...form, password_hash: e.target.value })}
          required
        />
        <input
          placeholder="First Name"
          value={form.fname}
          onChange={(e) => setForm({ ...form, fname: e.target.value })}
          required
        />
        <input
          placeholder="Middle Name"
          value={form.mname}
          onChange={(e) => setForm({ ...form, mname: e.target.value })}
        />
        <input
          placeholder="Last Name"
          value={form.lname}
          onChange={(e) => setForm({ ...form, lname: e.target.value })}
          required
        />
        <input
          placeholder="Contact Number"
          value={form.contact_number}
          onChange={(e) => setForm({ ...form, contact_number: e.target.value })}
        />
        <input
          placeholder="Student ID"
          value={form.user_id}
          onChange={(e) => setForm({ ...form, user_id: e.target.value })}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignUp;
