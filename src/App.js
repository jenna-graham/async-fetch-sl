import { useState, useEffect } from 'react';

import { getCrystals, getDragons, getKids, getBooks } from './services/fetch-utils.js';
import CrystalsList from './CrystalsList.js';
import DragonList from './DragonList.js';
import KidsList from './KidsList.js';
import BookList from './BookList.js';

import './App.css';
// import your arrays here

function App() {
  const [crystals, setCrystals] = useState([]);
  const [dragons, setDragons] = useState([]);
  const [kids, setKids] = useState([]);
  const [books, setBooks] = useState([]);

  async function fetchCrystalsData() {
    const data = await getCrystals();
    setCrystals(data);
  }
  async function fetchDragonsData() {
    const data = await getDragons();
    setDragons(data);
  }
  async function fetchKidsData() {
    const data = await getKids();
    setKids(data);
  }
  async function fetchBooksData() {
    const data = await getBooks();
    setBooks(data);
  }


  useEffect(() => {
    fetchCrystalsData();
    fetchDragonsData();
    fetchKidsData();
    fetchBooksData();
  }, []);


  return (
    <div className='App'>
      <h1>Crystals</h1>
      <CrystalsList crystals={crystals}/>
      <h1>Dragons</h1>
      <DragonList dragons={dragons} />
      <h1>My Children</h1>
      <KidsList kids={kids}/>
      <h1>Books</h1>
      <BookList books={books}/>
    </div>
  );
}
export default App;
