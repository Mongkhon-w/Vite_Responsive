import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { useTransactions } from '../hooks/useTransactions'; 
import { exportDataAsJSON } from '../utils/exportUtils';

export const Dashboard = () => {
  // ดึง state ทั้ง 3 ตัวออกมาจาก Hook
  const { data, loading, error } = useTransactions();

  const handleExport = () => {
    exportDataAsJSON(data, 'financial_data_export.json');
  };

  // 1. หน้าจอตอนกำลังโหลดข้อมูล
  if (loading) {
    return (
      <MainLayout>
        <div style={{ textAlign: 'center', padding: '50px', color: '#6b7280' }}>
          <h2>กำลังโหลดข้อมูลธุรกรรม...</h2>
        </div>
      </MainLayout>
    );
  }

  // 2. หน้าจอตอนเกิดข้อผิดพลาด
  if (error) {
    return (
      <MainLayout>
        <div style={{ background: '#fee2e2', padding: '20px', borderRadius: '8px', border: '1px solid #ef4444' }}>
          <h2 style={{ color: '#b91c1c' }}>เกิดข้อผิดพลาด!</h2>
          <p style={{ color: '#991b1b' }}>{error}</p>
        </div>
      </MainLayout>
    );
  }

  // 3. หน้าจอตอนโหลดข้อมูลสำเร็จ
  return (
    <MainLayout>
      <h2>ภาพรวมแอปพลิเคชันการเงิน</h2>
      <button onClick={handleExport} style={{ marginTop: '16px', marginBottom: '24px', padding: '10px 16px', background: '#0284c7', color: 'white', border: 'none', fontWeight: 'bold' }}>
        Export Data (JSON)
      </button>
      
      <div className="data-grid">
        {data.map(item => (
          <div key={item.id} className="card" style={{ borderLeft: `4px solid ${item.type === 'income' ? '#10b981' : '#ef4444'}` }}>
            <h4>{item.title}</h4>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: item.type === 'income' ? '#10b981' : '#ef4444' }}>
              {item.type === 'income' ? '+' : '-'} ฿{Math.abs(item.amount).toLocaleString()}
            </p>
            <small style={{ color: '#9ca3af' }}>วันที่: {item.date}</small>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};