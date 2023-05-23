import Card from '../Card/card.component';
import "./card-list.styles.css"
function CardList({data}){
        return (<div className='card-list'>
            {data.map((monster) =>
                <Card key={monster.id} {...monster} />
            )}
        </div>);
    }


export default CardList;