import classes from './Meal.module.css';
import React, { useState } from 'react';

const Meal = (props) => {
    const [amount, setAmount] = useState('1')

    return (
        <div className={ classes.meal }>
            <div className={ classes.container }>
                <div className={classes.mealname}>{ props.meal.name }</div>
                <div>
                    <label for="amount">Amount</label>
                    <input type="number" id="amount" name="amount" value={amount}></input>
                    <button type="submit"></button>
                </div>
            </div>
            <div className={classes.description}>{ props.meal.description }</div>
            <div className={ classes.price }>{ props.meal.price }</div>
        </div>
    )
}

export default Meal;