import React from 'react';
import Card from '../Components/Card';


const CardList = ({humans}) => {

    /*All loops should have a unique key for react to know which one is to delete*/
    const cardsArray = humans.map((user, i) => {
        return <Card key = {i}
                     id ={humans[i].id} 
                     name ={humans[i].name} 
                     email={humans[i].email}/>
                })

    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;