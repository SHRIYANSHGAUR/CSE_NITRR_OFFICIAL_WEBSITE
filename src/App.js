import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Dev from './Components/Dev.jsx';
import Layout from './Layout.js';
import Repo from './Components/Repo.jsx';

import Policy from './Components/Policy.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dev" element={<Dev />} />
        <Route path="repo" element={<Repo />} />
        <Route
          path="policy"
          element={
            <Policy
              head={'Policy'}
              content={
                'his is subject to the material being reproduced accurately and not being used in a derogatory manner or in a misleading context. Where the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material does not extend to any material on this site, which is identified as being the copyright of a third party. Authorization to reproduce such material must be obtained from the copyright holders concerned'
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
// DONT REMOVE THESE REPO AND DEV ROUTES AS IT HELPS IN EASY TRACKING AND MAINTAINACE OF CODE !
//PS: Future developers keep adding your info in the Dev.jsx we want to see our juniours flourish.
// PS: WE ARE WATCHING !
