// ClientBondHistory.jsx
import { useEffect, useState } from 'react';
import API from '../services/userService';

export default function ClientBondHistory() {
  const [bonds, setBonds] = useState([]);

  useEffect(() => {
    const fetchMyBonds = async () => {
      try {
        const res = await API.get('/bonds/mine');
        setBonds(res.data);
      } catch (err) {
        alert('Error fetching bond history');
      }
    };

    fetchMyBonds();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Your Bond History</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Client</th>
            <th className="p-2 text-left">Bought</th>
            <th className="p-2 text-left">Sold</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {bonds.map(bond => (
            <tr key={bond._id} className="border-t">
              <td className="p-2">{bond.user?.name || 'N/A'}</td>
              <td className="p-2">{bond.totalBought}</td>
              <td className="p-2">{bond.totalSold}</td>
              <td className="p-2">{new Date(bond.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
