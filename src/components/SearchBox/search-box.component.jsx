import React, { Component } from 'react';
import "./search-box.styles.css";
class SearchBox extends Component {
    state = {}
    render() {
        const {className,placeholder,onChange}=this.props;
        return (<input 
            className={className} 
            type='search' 
            placeholder={placeholder}
            onChange={onChange} 
            />);
    }
}

export default SearchBox;