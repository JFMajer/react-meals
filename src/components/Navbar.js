import 'bulma/css/bulma.min.css';
import React from 'react';


const Navbar = (props) => {
    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <div className="navbar-item">React Meals</div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <button className="button is-primary" onClick={ props.showCartSwitcher }>             
                            <span>Order</span>
                            <span className="p-2 hsl(207, 61%, 53%)">{props.amountOfItems}</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;