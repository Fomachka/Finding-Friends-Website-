import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-grey dib br3 pa3 ma2 grow bw2 shadow-4'>
            <img alt='humans' src={`https://flathash.com/${props.id}`} width = "200" height="200"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;