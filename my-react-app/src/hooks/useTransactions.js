import { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/apiService';

export const useTransactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // เพิ่ม State สำหรับจัดการ Error

  useEffect(() => {
    // ฟังก์ชันสำหรับเรียก API
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null); // เคลียร์ Error เก่าทิ้งก่อนเริ่มดึงข้อมูลใหม่
        
        // รอรับข้อมูล JSON จาก Service
        const result = await fetchTransactions();
        setData(result);
        
      } catch (err) {
        // หากเกิด Error ให้เก็บข้อความไว้แสดงผล
        setError(err.message);
      } finally {
        // ไม่ว่าจะสำเร็จหรือพัง ก็ต้องปิดสถานะ Loading
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};