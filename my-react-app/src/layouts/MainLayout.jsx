import React from 'react';
import './Layout.css'; 

export const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="navbar">
        <h2>My Responsive App</h2>
      </header>
      {/* ส่วน Content จะปรับขนาดตามหน้าจออัตโนมัติ */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};