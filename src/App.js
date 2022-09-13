import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div>
      <nav>
        <Link to='/'><h1>TH | Photos</h1></Link>
        <ul>
          <li>
            <Link to='/photos'>Photos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
