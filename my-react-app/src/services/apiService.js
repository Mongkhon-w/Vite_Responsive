export const fetchProducts = async () => {
  // จำลองการดึงข้อมูลจาก API และคืนค่าเป็น JSON Array
  return [
    { id: 1, title: "Mechanical Keyboard", price: 3500 },
    { id: 2, title: "Wireless Mouse", price: 1200 },
    { id: 3, title: "Monitor 27 inch", price: 8500 },
  ];
};