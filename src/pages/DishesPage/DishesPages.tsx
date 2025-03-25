import s from "./Dishes.module.scss"

const DishesPages = () => {
    return (
        <div className={`${s.dishes} container`}>
            <h2>Dishes</h2>
            <button className={s.addButton}>Add new dish</button>
        </div>
    )


}
export default DishesPages