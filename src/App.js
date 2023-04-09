
import './App.css';
// import './public/css/login.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';





function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Dashboard />} />
          
          <Route path="/login" exact element={<Login />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;