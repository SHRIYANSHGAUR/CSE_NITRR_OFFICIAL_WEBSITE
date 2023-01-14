import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Dev from './Components/Dev.jsx';
import Layout from './Layout.js';
import Repo from './Components/Repo.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dev" element={<Dev />} />
        <Route path="repo" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
}
// DONT REMOVE THESE REPO AND DEV ROUTES AS IT HELPS IN EASY TRACKING AND MAINTAINACE OF CODE !
//PS: Future developers keep adding your info in the Dev.jsx we want to see our juniours flourish.
// PS: WE ARE WATCHING !
