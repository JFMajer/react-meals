import React from 'react';
import MealInCart from './MealInCart';

const Cart = (props) => {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Your order</p>
                    <button className="delete" aria-label="close" onClick={ props.showCartSwitcher }></button>
                </header>
                <section className="modal-card-body">
                    { props.order.map(meal => {
                        return <MealInCart meal={ meal } key={ meal.id } addToOrder={ props.addToOrder } removeFromOrder={ props.removeFromOrder } />
                    }) }
                    <div className="columns">
                        <div className="column">Total</div>
                        <div className="column">${props.totalBill}</div>
                    </div>
                </section>
                <footer className="modal-card-foot columns">
                    <button className="button is-success column is-3 is-rounded" onClick={ props.showCartSwitcher }>Order</button>
                    <button className="button column is-3 is-rounded" onClick={ props.showCartSwitcher }>Cancel</button>
                    <button className="button is-danger column is-3 is-offset-2 is-rounded" onClick={ props.emptyBasket }>Empty Basket</button>
                </footer>
            </div>
        </div>
    )
}

export default Cart;