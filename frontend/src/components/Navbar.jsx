import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setMenuOpen(false);
    navigate('/home');
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="w-full bg-gray-950 shadow-md px-4 md:px-20 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-blue-500 cursor-pointer"
        onClick={() => {
          navigate('/');
          setMenuOpen(false);
        }}
      >
        LOGO
      </div>

      {/* Desktop Links & Buttons */}
      <div className="hidden md:flex md:items-center md:gap-10">
        {/* Links */}
        <ul className="flex items-center gap-10 text-gray-300">
          <li
            className="hover:text-blue-500 cursor-pointer transition"
            onClick={() => navigate('/')}
          >
            Home
          </li>

          {user?.role === 'admin' && (
            <>
              <li
                className="hover:text-blue-500 cursor-pointer transition"
                onClick={() => navigate('/admin/dashboard')}
              >
                Admin Dashboard
              </li>
              <li
                className="hover:text-blue-500 cursor-pointer transition"
                onClick={() => navigate('/admin/bonds')}
              >
                Bond Dashboard
              </li>
            </>
          )}

          {user?.role === 'client' && (
            <li
              className="hover:text-blue-500 cursor-pointer transition"
              onClick={() => navigate('/bonds/history')}
            >
              Bond History
            </li>
          )}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4 ml-10">
          {!user ? (
            <>
              <button
                className="px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded hover:bg-blue-700 transition"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-transparent text-blue-500 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-red-600 text-white border border-red-600 rounded hover:bg-red-700 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Hamburger Button (Mobile) - aligned right */}
      <button
        className="md:hidden text-blue-500 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 w-64 bg-gray-950 shadow-lg h-full z-30 transform transition-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col p-6 gap-6 text-gray-300">
          <li
            className="hover:text-blue-500 cursor-pointer transition"
            onClick={() => {
              navigate('/');
              setMenuOpen(false);
            }}
          >
            Home
          </li>

          {user?.role === 'admin' && (
            <>
              <li
                className="hover:text-blue-500 cursor-pointer transition"
                onClick={() => {
                  navigate('/admin/dashboard');
                  setMenuOpen(false);
                }}
              >
                Admin Dashboard
              </li>
              <li
                className="hover:text-blue-500 cursor-pointer transition"
                onClick={() => {
                  navigate('/admin/bonds');
                  setMenuOpen(false);
                }}
              >
                Bond Dashboard
              </li>
            </>
          )}

          {user?.role === 'client' && (
            <li
              className="hover:text-blue-500 cursor-pointer transition"
              onClick={() => {
                navigate('/bonds/history');
                setMenuOpen(false);
              }}
            >
              Bond History
            </li>
          )}

          <div className="flex flex-col gap-4 mt-4">
            {!user ? (
              <>
                <button
                  className="px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded hover:bg-blue-700 transition"
                  onClick={() => {
                    navigate('/login');
                    setMenuOpen(false);
                  }}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 bg-transparent text-blue-500 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                  onClick={() => {
                    navigate('/signup');
                    setMenuOpen(false);
                  }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                className="px-4 py-2 bg-red-600 text-white border border-red-600 rounded hover:bg-red-700 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
