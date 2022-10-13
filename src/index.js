import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { Balance } from './balance/balance';
import { Dashboard } from './dashboard/dashboard';
import { Deposit } from './deposit/deposit';
import { NewCustomer } from './new-customer/new-customer';
import { Transfer } from './transfer/transfer';
import { Withdraw } from './withdraw/withdraw';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Balance />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/transfer" element={<NewCustomer />} />
        <Route path="/balance" element={<Transfer />} />
        <Route path="/withdrawal" element={<Withdraw />} />
      </Routes>
  </BrowserRouter>
  

);

