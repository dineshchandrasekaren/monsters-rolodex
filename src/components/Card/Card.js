import React, { Component } from 'react';
class Card extends Component {
    state = {}
    render() {
        return (<div>
            <h1 key={this.props.id}>{this.props.name}</h1>
        </div>);
    }
}

export default Card;