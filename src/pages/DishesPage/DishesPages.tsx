import s from "./Dishes.module.scss"
import DishItem from "../../components/DishItem/DishItem";
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDishes } from "../../store/dishesAction";
import DishForm from "../../components/DishForm/DishForm";
import Modal from "../../components/Modal/Modal";
import { deleteDish } from "../../store/dishesSlice";
import axios from "axios";



const DishesPages = () => {
    const [isShowForm, setIsShowForm] = useState(false);
    const [dishToEdit, setDishToEdit] = useState<null | string>(null);

    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.dishes);

    const handleDeleteDish = async (id: string) => {
        dispatch(deleteDish(id));
        await axios.delete(`http://localhost:3001/dishes/${id}`);
    };

    const handelEditDish = (id: string) => {
        setDishToEdit(id);
        setIsShowForm(true);
    }

    const dishForEdit = items.find(dish => dish.id === dishToEdit) || undefined


    useEffect(() => {
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
                    <button className={s.addButton} onClick={() => setIsShowForm(true)}>Add new dish</button>
                </div>

                {
                    items.map(dish => (
                        <DishItem
                            id={dish.id}
                            title={dish.title}
                            price={dish.price}
                            img={dish.img}
                            key={dish.id} 
                            onEdit = {handelEditDish}
                            onDelete = {handleDeleteDish}
                         />
                    ))}
                {isShowForm && (
                    <Modal onClose={() => setIsShowForm(false)}>
                        <DishForm
                            onClose={() => setIsShowForm(false)}
                            dishToEdit={dishForEdit} />
                    </Modal>
                )}
            </div>
        </>
    );


}
export default DishesPages