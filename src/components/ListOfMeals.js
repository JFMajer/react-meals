import React, { useState, useEffect } from 'react';
import Meal from './Meal'
import Card from './Card'
import classes from './ListOfMeals.module.css';

const mealsStarter = [
    {
        "name": "Sushi",
        "price": "$23.99",
        "description": "Delicous Japanese food",
        "id": "1"
    },
    {
        "name": "Schnitzel",
        "price": "$16.50",
        "description": "German speciality!",
        "id": "2"
    },
    {
        "name": "French Frites",
        "price": "$7",
        "description": "Best French fried in town",
        "id": "3"
    }
]

const ListOfMeals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        setMeals(mealsStarter)
    }, [])

    return (
        <Card className={ classes.list }>
            <div>
                { meals.map(meal => <Meal key={ meal.id } meal={ meal } />) }
            </div>
        </Card>
    )
}

export default ListOfMeals;