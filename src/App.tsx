import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/";
import Login from "./pages/login";
import Logo from "./assets/LogoVital.png";
import { ClientService } from './utils/api/ClientService';
import './App.css';
import { ClientContext } from './context/ClientContext';
import Dashboard from './pages/dashboard';
import { ExpenseContext } from './context/ExpenseContext';
import { IncomeContext } from './context/IncomeContext';
import { IncomeService } from './utils/api/IncomeService';
import { ExpenseService } from './utils/api/ExpenseService';

function App() {
  const clientService = new ClientService();
  const incomeService = new IncomeService();
  const expenseService = new ExpenseService();

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="Logo_vital" />
      </header>
      <Router>
        <div className='App'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <ExpenseContext.Provider value={{ expenseService }}>
          <IncomeContext.Provider value={{ incomeService }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={
                <ClientContext.Provider value={{ clientService }}>
                  <Login />
                </ClientContext.Provider>
              } />
            </Routes>
          </IncomeContext.Provider>
        </ExpenseContext.Provider>
      </Router>
    </div>
  );
}

export default App;
