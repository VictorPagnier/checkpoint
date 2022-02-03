import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorieDetails from './components/CategorieDetails';
import GameDetails from './components/GameDetails';
import AddGame from './pages/AddGame';
import DeleteGame from './pages/DeleteGame';
import Home from './pages/Home';
import ModifyGame from './pages/ModifyGame';
import Page404 from './pages/Page404';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="*" element={<Page404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/games/:id" element={<GameDetails />} />
          <Route exact path="/categories/:id/:id" element={<CategorieDetails />} />
          <Route exact path="/addgame" element={<AddGame />} />
          <Route exact path="/modifygame/:id" element={<ModifyGame />} />
          <Route exact path="/deletegame/:id" element={<DeleteGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
