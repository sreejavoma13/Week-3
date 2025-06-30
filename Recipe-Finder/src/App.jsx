import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Randomresults from './pages/RandomResults';
import Favorites from './favorites.jsx'
function App() {
  return (
    <Router>
      <div className='min-h-screen bg-slate-900 text-white' >
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/search/random" element={<Randomresults />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
