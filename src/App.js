import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginHeader from './components/loginheader';

function App() {
  return (
    <>
    <LoginHeader/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
