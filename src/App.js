import React, { Component } from 'react'
import CardList from './components/CardList/card-list.component';
import SearchBox from './components/SearchBox/search-box.component.jsx';
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [

      ],
      searchValue: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }))
  }
  searchMonsters = (event) => this.setState({ searchValue: event.target.value.toLowerCase() })
  render() {

    const {
      searchMonsters,
      state: { monsters, searchValue }
    } = this;

    return (<div>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
      onChange={searchMonsters}  
      placeholder={'Search Monsters'} 
      className="search-box"
      />
      <CardList 
      data={
        monsters.filter(monster => monster.name.toLowerCase().includes(searchValue))} 
      />
    </div>);
  }
}

export default App;
