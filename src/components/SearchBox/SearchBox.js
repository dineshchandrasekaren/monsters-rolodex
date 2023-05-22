import React, { Component } from 'react';

class SearchBox extends Component {
    state = {  } 
    render() { 
        return (<input type='search' placeholder='Search Monsters'  
        onChange={this.props.onChange} />);
    }
}
 
export default SearchBox;