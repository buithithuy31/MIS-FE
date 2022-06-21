import React, {useState, useEffect} from 'react';
import './App.css';

const orders = [100, 200, 300] // hóa đơn
function App() {
  // Khai báo 1 biến số đếm, gọi là count
  const [count, setCount] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    console.log(total);
    return total
  }); 
  const handleIncrease= () => {
    setCount(count+1)
  }
  //const [count, setCount] = useState(0)//giá trị khởi tạo là 0 giá trị này sẽ được lưu vào count
  // const total =orders.reduce((total, cur) => total + cur); // tính tổng hóa dơn

  // Khai báo nhiều biến trạng thái!
  // const [age, setAge] = useState(42);
  // const [fruit, setFruit] = useState('chuối');
  // const [todos, setTodos] = useState([{ text: 'Học Hooks' }]);
  // ...

  // Giống componentDidMount và componentDidUpdate:
  useEffect(() => {
    // Cập nhật tiêu đề trang web sử dụng API trình duyệt
    document.title = `Bạn đã bấm ${count} lần`;
  });
  
  return (
    <div className="App">
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={handleIncrease}>
        Bấm vào tôi
      </button>
    </div>
  );
}

export default App;
