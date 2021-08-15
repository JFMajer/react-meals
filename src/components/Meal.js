import React, { useState } from 'react';

const Meal = (props) => {
    const [amount, setAmount] = useState('1')

    const increaseAmount = () => {
        setAmount(parseInt(amount) + 1)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        let mealToOrder = {
            name: props.meal.name,
            amount: parseInt(amount),
            price: props.meal.price,
            id: props.meal.id
        }
        props.addToOrder(mealToOrder)
        setAmount('1')
    }

    const valueChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    return (
        <div className="card mb-2">
            {/* <header className="card-header">
            
            </header> */}
            <div className="card-content">
                <div className="columns">
                    <div className="column is-4 has-text-weight-semibold">{ props.meal.name }</div>
                    <div className="column is-4 is-offset-6 has-text-weight-semibold has-text-link">${ props.meal.price }</div>
                </div>
                <div className="is-flex control is-justify-content-space-between is-flex-direction-row">
                    <div> { props.meal.description } </div>
                    <form onSubmit={ submitHandler }>
                        <div className="field">
                            <div className="is-flex">
                                <label className="label">Amount</label>
                                <div className="control">
                                    <input className="input is-small" max="10" min="1" value={ amount } required type="number" onChange={ valueChangeHandler } />
                                </div>
                            </div>
                            <div className="is-flex control is-justify-content-flex-end is-flex-direction-row">
                                <button type="submit" className="button is-rounded is-link is-light is-small is-centered">Add to basket</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Meal;