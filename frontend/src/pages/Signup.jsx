import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/userService';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/signup', form);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input name="name" placeholder="Name" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="w-full mb-4 p-2 border rounded" />
        {/* <select name="role" onChange={handleChange} className="w-full mb-4 p-2 border rounded">
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select> */}
        <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition">
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account? <a className="text-blue-500" href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
