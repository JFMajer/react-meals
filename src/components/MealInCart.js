import React from 'react';

const MealInCart = (props) => {
    const addInBasket = (event) => {
        event.preventDefault()
        let mealToOrder = {
            name: props.meal.name,
            amount: 1,
            price: props.meal.price,
            id: props.meal.id
        }
        props.addToOrder(mealToOrder)
    }

    const removeInBasket = (e) => {
        e.preventDefault()
        props.removeFromOrder(props.meal.name)
    }

    return (
        <div>
            <div className="columns">
                <div className="column">{ props.meal.name }</div>
            </div>
            <div className="columns">
                <div className="column">{ props.meal.price }</div>
                <div className="column is-9">Amount: { props.meal.amount }</div>
                <button className="button is-small" onClick={addInBasket}>+</button>
                <button className="button is-small" onClick={removeInBasket}>-</button>
            </div>
        </div>
    )
}

export default MealInCart;