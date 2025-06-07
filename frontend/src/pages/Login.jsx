import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/userService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);

      const decoded = JSON.parse(atob(res.data.token.split('.')[1]));
      navigate(decoded.role === 'admin' ? '/home' : '/home');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <a className="text-blue-500" href="/signup">Signup</a>
        </p>
      </form>
    </div>
  );
}
