import React from 'react';

const Card = (props) => {
    const {id, name, username, email} = props;
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${name}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>Username: {username}</p>
                <p>ID number: {id}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;