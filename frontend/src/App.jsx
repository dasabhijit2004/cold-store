import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import AdminDashboardBonds from './pages/BondDashboard';
import ClientBondHistory from './pages/ClientBondHistory';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={token ? "/home" : "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/bond-dashboard" element={<AdminDashboardBonds />} />
        <Route path="/bond-history" element={<ClientBondHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
