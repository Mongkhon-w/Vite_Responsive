// src/layouts/MainLayout.jsx
import React from 'react';
import { useApp } from '../context/AppContext';
import './Layout.css';

export const MainLayout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useApp();

  return (
    <div className="layout-container">
      {/* Navigation Bar */}
      <nav className="navbar" style={{ height: '60px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001 }}>
        <button className="menu-btn" onClick={toggleSidebar}>☰</button>
        <span>Application Logo</span>
      </nav>

      <div className="main-wrapper">
        {/* Sidebar ที่เปลี่ยนคลาสตามสถานะเปิด/ปิด และขนาดหน้าจอ */}
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li>Dashboard</li>
            <li>Products</li>
            <li>Settings</li>
          </ul>
        </aside>

        {/* Content Area ที่จะปรับขนาดตามอุปกรณ์อัตโนมัติ */}
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};