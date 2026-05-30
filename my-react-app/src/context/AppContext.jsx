import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // --- เพิ่ม useEffect ตรงนี้ ---
  // เมื่อ theme เปลี่ยน จะไปเปลี่ยนชื่อ class ของ <body> อัตโนมัติ
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);