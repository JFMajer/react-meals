import React, { useState, useEffect } from 'react';
import Meal from './Meal'
import Navbar from './Navbar'
import Cart from './Cart'


const mealsStarter = [
    {
        "name": "Sushi",
        "price": "23.99",
        "description": "Delicous Japanese food",
        "id": "1"
    },
    {
        "name": "Schnitzel",
        "price": "16.50",
        "description": "German speciality!",
        "id": "2"
    },
    {
        "name": "French Frites",
        "price": "7",
        "description": "Best French fries in town",
        "id": "3"
    },
    {
        "name": "Blood Sausage",
        "price": "11.50",
        "description": "Best Polish dish ever.",
        "id": "4"
    }
]

const ListOfMeals = () => {
    const [meals, setMeals] = useState([])
    const [order, setOrder] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [amountOfItems, setAmountOfItems] = useState()
    const [totalBill, setTotalBill] = useState()

    const amountOfItemsTotal = (orderArray) => {
        let amount = 0;
        for (const ele of orderArray) {
            amount += ele.amount
        }
        return amount;
    }

    const totalBillCalculator = (orderArray) => {
        let total = 0;
        for (const ele of orderArray) {
            total += (ele.amount * ele.price)
        }
        return total;
    }

    const addToOrder = (orderItem) => {
        const i = order.findIndex(_o => _o.name === orderItem.name)
        if (i === -1) {
            orderItem.totalPrice = orderItem.price * orderItem.amount
            setOrder(order => [...order, orderItem])
        } else {
            let newArr = [...order]
            let updatedItem = order[i]
            updatedItem.amount += orderItem.amount
            updatedItem.totalPrice = updatedItem.amount * orderItem.price
            newArr[i] = updatedItem
            setOrder(newArr)
        }
    }

    const removeFromOrder = (mealName) => {
        const i = order.findIndex(_o => _o.name === mealName)
        let newArr = [...order]
        let updatedItem = order[i]
        if (updatedItem.amount > 1) {
            updatedItem.amount -= 1
            newArr[i] = updatedItem
        } else if (updatedItem.amount === 1) {
            newArr.splice(i, 1)
        }
        setOrder(newArr)
    }

    const showCartSwitcher = () => {
        setShowModal(!showModal)
    }

    const emptyBasket = () => {
        setOrder([])
        setShowModal(!showModal)
    }


    useEffect(() => {
        setMeals(mealsStarter)
    }, [])

    useEffect(() => {
        setAmountOfItems(amountOfItemsTotal(order))
    }, [order])

    useEffect(() => {
        setTotalBill(totalBillCalculator(order))
    }, [order])

    return (
        <>
            <Navbar showCartSwitcher={showCartSwitcher} amountOfItems={amountOfItems} />
            {showModal && <Cart order={order} showCartSwitcher={showCartSwitcher} addToOrder={addToOrder} removeFromOrder={removeFromOrder} emptyBasket={emptyBasket} totalBill={totalBill} />}
            <div className="column is-half is-offset-one-quarter">
                <div className="column center">
                    { meals.map(meal => <Meal key={ meal.id } meal={ meal } addToOrder={addToOrder} />) }
                </div>
            </div>
        </>
    )
}

export default ListOfMeals;