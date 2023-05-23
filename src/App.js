import  { useEffect, useState } from 'react'
import CardList from './components/CardList/card-list.component';
import SearchBox from './components/SearchBox/search-box.component.jsx';
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
console.log("render"+ Math.random(100));
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>  response.json())
      .then((monsters) => setMonsters(monsters))
  }, []);

  useEffect(() => {
    // console.log("[monsters, searchField]");
    const filteredMonstersData = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
    setFilteredMonsters(filteredMonstersData)
  }, [searchField,monsters]);

  const searchMonsters = (event) => setSearchField(event.target.value.toLowerCase());

  return (
    <div>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        onChange={searchMonsters}
        placeholder={'Search Monsters'}
        className="search-box"
      />
      <CardList
        data={filteredMonsters}
      />
    </div>
  )
}

export default App;
