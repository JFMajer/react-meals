import React, { useState, useEffect } from 'react';
import Meal from './Meal'

const mealsStarter = [
    {
        "name": "Sushi",
        "price": "$23.99",
        "description": "Delicous Japanese food"
    },
    {
        "name": "Schnitzel",
        "price": "$16.50",
        "description": "German speciality!"
    }
]

const ListOfMeals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        setMeals(mealsStarter)
    }, [])
    
    return (
        meals.map(meal => {
            return <Meal meal={meal} />
        })
    )
}

export default ListOfMeals;