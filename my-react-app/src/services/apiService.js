// ฟังก์ชันจำลองการดึงข้อมูล JSON จาก Server
export const fetchTransactions = async () => {
  return new Promise((resolve, reject) => {
    // จำลองการโหลดข้อมูล 1.5 วินาที
    setTimeout(() => {
      const isSuccess = true; // ลองเปลี่ยนเป็น false เพื่อดูหน้าจอตอนเกิด Error 

      if (isSuccess) {
        // ข้อมูล JSON ที่ได้จากการตอบกลับของ API
        resolve([
          { id: 'TXN-001', title: "เงินเดือนเข้า", amount: 45000, type: "income", date: "2026-05-28" },
          { id: 'TXN-002', title: "ค่าใช้จ่ายเซิร์ฟเวอร์", amount: -1500, type: "expense", date: "2026-05-29" },
          { id: 'TXN-003', title: "รายได้จากแอปพลิเคชัน", amount: 12500, type: "income", date: "2026-05-30" },
        ]);
      } else {
        // จำลองกรณีที่ Server มีปัญหา หรือ Network ล่ม
        reject(new Error("ไม่สามารถเชื่อมต่อฐานข้อมูลได้ กรุณาลองใหม่อีกครั้ง"));
      }
    }, 1500);
  });
};