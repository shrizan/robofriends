import React from 'react'
import Card from './Card'

const CardList =({ robots })=>{
    const cardComponent = robots.map(robot=>{
        const { id, email, name } = robot
        return <Card id={id} name={name} email={email} key={id}/>
    })
    return (
        <div>
            { cardComponent }
        </div>
    )
}

export {CardList as default}