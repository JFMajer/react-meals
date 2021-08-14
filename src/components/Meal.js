
const Meal = (props) => {
    return (
        <div>
            {props.meal.name}
            {props.meal.price}
        </div>
    )
}

export default Meal;