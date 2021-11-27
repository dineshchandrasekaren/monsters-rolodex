import './App.css';
import react from 'react';
import CardList from './Components/Card List/Card-List.components';
import SearchBox from './Components/Search Box/search-box.components';

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString:""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }));
  }

  render() {
    const handleChange = (e) => this.setState({ searchString: e.target.value });
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchString.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={ handleChange} placeholder="Search String"/>
        <CardList monsters={ filteredMonsters}/>
      </div>
    )
  }
}

export default App;
