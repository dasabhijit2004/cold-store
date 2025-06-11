import { useEffect, useState } from 'react';
import API from '../services/userService';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const res = await API.get('/admin/users');
            setUsers(res.data);
        } catch (err) {
            alert('Access denied or error fetching users');
            navigate('/login');
        } finally {
            setLoading(false);
        }
    };

    const updateRole = async (id, newRole) => {
        try {
            await API.put(`/admin/users/${id}/role`, { role: newRole });
            fetchUsers();
        } catch (err) {
            alert('Error updating role');
        }
    };

    const handleDelete = async (userId) => {
        const confirm = window.confirm('Are you sure you want to delete this user?');
        if (!confirm) return;

        try {
            await API.delete(`/admin/users/${userId}`);
            setUsers(users.filter(u => u._id !== userId));
        } catch (err) {
            alert(err.response?.data?.msg || 'Error deleting user');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;

    return (
        <div className="p-4 max-w-4xl md:w-full mx-auto bg-gray-900 min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>
            <table className="min-w-full bg-gray-800 rounded shadow">
                <thead>
                    <tr className="bg-gray-700 text-left text-gray-200">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Role</th>
                        <th className="py-2 px-4">Change Role</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="border-t border-gray-700 hover:bg-gray-700">
                            <td className="py-2 px-4">{user.name}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">{user.role}</td>
                            <td className="py-2 px-4">
                                <select
                                    value={user.role}
                                    onChange={(e) => updateRole(user._id, e.target.value)}
                                    className="border p-1 rounded bg-gray-700 text-white"
                                >
                                    <option value="client">Client</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>

                            <td className="py-2 px-4">
                                <button
                                    onClick={() => handleDelete(user._id)}
                                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-sm"
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
