import React, { Component } from 'react'
import Card from '../Card/Card';

class CardList extends Component {
    state = {}
    render() {
        console.log(this.props.data);
        return (<React.Fragment>
            {this.props.data.map((monster) =>
                <Card {...monster} />
            )}
        </React.Fragment>);
    }
}

export default CardList;