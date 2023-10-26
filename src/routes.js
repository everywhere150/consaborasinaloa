// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/detail/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
