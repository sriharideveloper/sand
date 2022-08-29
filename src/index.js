import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Quiz from "./pages/quiz";
import Resources from "./pages/resources";
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
      </Routes>
    </BrowserRouter>
  </>
);
