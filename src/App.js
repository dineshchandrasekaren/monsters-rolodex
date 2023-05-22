import React, { Component } from 'react'
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
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
      <SearchBox onChange={searchMonsters} />
      <CardList data={monsters.filter(monster => monster.name.toLowerCase().includes(searchValue))} />
    </div>);
  }
}

export default App;
