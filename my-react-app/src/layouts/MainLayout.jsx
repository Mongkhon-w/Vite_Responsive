import React from 'react';
import { NavLink } from 'react-router-dom'; // นำเข้า NavLink
import { useApp } from '../context/AppContext';
import './Layout.css';

export const MainLayout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useApp();

  return (
    <div className="layout-container">
      <nav className="navbar">
        <button className="menu-btn" onClick={toggleSidebar}>☰</button>
        <span>Application Logo</span>
      </nav>

      <div className="main-wrapper">
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            {/* ใช้ NavLink แทน li ธรรมดา */}
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                end
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/settings" 
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};