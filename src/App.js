import { useState, useEffect } from 'react';
import CrystalsList from './CrystalsList.js';
import { getCrystals, getDragons, getKids } from './services/fetch-utils.js';
import DragonList from './DragonList.js';
import KidsList from './KidsList.js';

import './App.css';
// import your arrays here

function App() {
  const [crystals, setCrystals] = useState([]);
  const [dragons, setDragons] = useState([]);
  const [kids, setKids] = useState([]);

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

  useEffect(() => {
    fetchCrystalsData();
    fetchDragonsData();
    fetchKidsData();
  }, []);


  return (
    <div className='App'>
      <h1>Crystals</h1>
      <CrystalsList crystals={crystals}/>
      <h1>Dragons</h1>
      <DragonList dragons={dragons} />
      <h1>My Children</h1>
      <KidsList kids={kids}/>
    </div>
  );
}
export default App;
