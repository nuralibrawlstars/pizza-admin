import s from "./Dishes.module.scss"
import DishItem from "../../components/DishItem/DishItem";
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDishes } from "../../store/dishesAction";
import DishForm from "../../components/DishForm/DishForm";



const DishesPages = () => {
   const [isShowForm, setIsShowForm] = useState(false);
   const dispatch = useDispatch<AppDispatch>();
   const {items, loading, error}=useSelector((state: RootState) => state.dishes);
   useEffect(()=>{
    dispatch(fetchDishes());
   }, [dispatch]);

   if (loading) {
    return (
        <div className={s.loading}>
            <div className={s.spinner}></div>
        </div>
    );
   }

   if (error) {
    return (
        <div className={s.error}>An error occured!</div>
    )
   }

    return (
        <>
        <div className="container">
            <div className={`${s.dishes} container`}>
                <h2>Dishes</h2>
                <button className={s.addButton} onClick={()=>setIsShowForm(true)}>Add new dish</button>
            </div>

            {
                items.map(dish => (
                    <DishItem
                        title={dish.title}
                        price={dish.price}
                        img={dish.img}
                        key={dish.id} />

                
            ))}
            {isShowForm && <DishForm />}
        </div>
        </>
    );


}
export default DishesPages