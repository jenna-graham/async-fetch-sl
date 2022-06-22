import { useState, useEffect } from 'react';
import CrystalsList from './CrystalsList.js';
import { getCrystals, getDragons, getKids } from './services/fetch-utils.js';
import DragonList from './DragonList.js';


import './App.css';
// import your arrays here

function App() {
  const [crystals, setCrystals] = useState([]);
  const [dragons, setDragons] = useState([]);

  async function fetchCrystalsData() {
    const data = await getCrystals();
    setCrystals(data);
  }
  async function fetchDragonsData() {
    const data = await getDragons();
    setDragons(data);
  }
  

  useEffect(() => {
    fetchCrystalsData();
    fetchDragonsData();
  }, []);


  return (
    <div className='App'>
      <h1>Crystals</h1>
      <CrystalsList crystals={crystals}/>
      <h1>Dragons</h1>
      <DragonList dragons={dragons} />
      
    </div>
  );
}
export default App;
