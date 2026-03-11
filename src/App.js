import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/customer/Register';
import Login from './components/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import CustomerDashboard from './components/customer/CustomerDashboard';
import Header  from './components/admin/landingPage/Header';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Header/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
          <Route path='/CustomerDashboard' element={<CustomerDashboard/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;