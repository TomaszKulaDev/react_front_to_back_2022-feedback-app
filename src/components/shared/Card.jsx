import React from 'react';

const Card = ({children, reverse}) => {

    // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
        return (
            <div className='card'>{children}</div>
        )
}

export default Card;
