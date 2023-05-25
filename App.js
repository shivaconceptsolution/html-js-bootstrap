import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHello from './MyHello';
import Swap from './Swap';
import Hello from './Hello';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MyHello />} />
        <Route path="myhello" element={<MyHello />} />
        <Route path="swap" element={<Swap />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
