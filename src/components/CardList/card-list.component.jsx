import React, { Component } from 'react'
import Card from '../Card/card.component';
import "./card-list.styles.css"
class CardList extends Component {
    state = {}
    render() {
        return (<div className='card-list'>
            {this.props.data.map((monster) =>
                <Card key={monster.id} {...monster} />
            )}
        </div>);
    }
}

export default CardList;