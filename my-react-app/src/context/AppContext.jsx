import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// สร้าง Custom Hook สำหรับเรียกใช้ Context 
export const useApp = () => useContext(AppContext);