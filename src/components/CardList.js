import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {
    if (false) {
        throw new Error('Meh...');
    }

    return (
    <div>
       {
        Robots.map((robotinarray,i) => {
        return (
                <Card 
                    key={Robots[i].id} 
                    id={Robots[i].id} 
                    name={Robots[i].name} 
                    username={Robots[i].username} 
                    email={Robots[i].email}/>
                );
            })
        }
    </div>
    );
}

export default CardList;
