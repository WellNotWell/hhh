import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import ComicPage from './pages/comic_page';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="hhh/" element={<Main />} />
      <Route path="/comic" element={<ComicPage />} />
    </Routes>
  </Router>
);

export default App;
