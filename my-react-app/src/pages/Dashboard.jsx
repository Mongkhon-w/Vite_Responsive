import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { useProducts } from '../hooks/useTransactions'; 
import { exportDataAsJSON } from '../utils/exportUtils';

export const Dashboard = () => {
  const { products, loading } = useProducts();

  const handleExport = () => {
    // เรียกใช้ Util เพื่อ Export ข้อมูลเป็น JSON
    exportDataAsJSON(products, 'financial_transactions.json');
  };

  if (loading) return <MainLayout><h2>Loading Data...</h2></MainLayout>;

  return (
    <MainLayout>
      <h2>Dashboard Overview</h2>
      <button onClick={handleExport} style={{ marginBottom: '16px', padding: '8px 16px' }}>
        Export Data (JSON)
      </button>
      
      <div className="data-grid">
        {products.map(item => (
          <div key={item.id} className="card">
            <h4>{item.title}</h4>
            <p>ยอด: ฿{item.price}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};