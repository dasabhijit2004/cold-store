// AdminDashboardBonds.jsx
import { useEffect, useState } from 'react';
import API from '../services/userService';

export default function AdminDashboardBonds() {
  const [searchName, setSearchName] = useState('');
  const [bonds, setBonds] = useState([]);
  const [form, setForm] = useState({ userName: '', totalBought: '', totalSold: '' });

  useEffect(() => {
    fetchAllBonds();
  }, []);

  const fetchAllBonds = async () => {
    try {
      const res = await API.get('/bonds/admin/all');
      setBonds(res.data);
    } catch (err) {
      alert('Error fetching all bonds');
    }
  };

  const fetchBonds = async () => {
    try {
      if (!searchName) return fetchAllBonds();
      const res = await API.get(`/bonds/admin/search?name=${searchName}`);
      setBonds(res.data);
    } catch (err) {
      alert('Error fetching bonds');
    }
  };

  const createBond = async () => {
    try {
      await API.post('/bonds/admin', form);
      alert('Bond created');
      fetchAllBonds();
    } catch (err) {
      alert('Error creating bond');
    }
  };

  const deleteBond = async (id) => {
    try {
      await API.delete(`/bonds/admin/${id}`);
      setBonds(bonds.filter(b => b._id !== id));
    } catch (err) {
      alert('Error deleting bond');
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Admin Bond Management</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={fetchBonds} className="bg-blue-600 text-white px-4 rounded">Search</button>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">Create Bond</h2>
        <input
          type="text"
          placeholder="Client Name"
          value={form.userName}
          onChange={(e) => setForm({ ...form, userName: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Total Bought"
          value={form.totalBought}
          onChange={(e) => setForm({ ...form, totalBought: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Total Sold"
          value={form.totalSold}
          onChange={(e) => setForm({ ...form, totalSold: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <button onClick={createBond} className="bg-green-600 text-white px-4 py-1 rounded">Create Bond</button>
      </div>

      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Client</th>
            <th className="py-2 px-4">Bought</th>
            <th className="py-2 px-4">Sold</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {bonds.map((bond) => (
            <tr key={bond._id} className="text-center border-t">
              <td className="py-2 px-4">{bond.user?.name || 'N/A'}</td>
              <td className="py-2 px-4">{bond.totalBought}</td>
              <td className="py-2 px-4">{bond.totalSold}</td>
              <td className="py-2 px-4">{new Date(bond.date).toLocaleDateString()}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => deleteBond(bond._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
