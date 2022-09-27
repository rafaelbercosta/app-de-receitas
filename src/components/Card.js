import React from 'react';

function Card({ image, name, index }) {
    return(
        <div data-testid={ `${ index }-recipe-card` }>
            <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
            <p data-testid={ `${index}-card-name` } >{name}</p>
        </div>
    )
}

export default Card;
