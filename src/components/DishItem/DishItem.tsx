import s from './DishItem.module.scss';
import { Dish } from '../../types';


const DishItem: React.FC<Dish> = ({ title, price, img }) => {
  return (
    <div className={s.card}>
      <div className={s.wrap}>
        <img src={img} alt='dish' className={s.img} />
        <h3>{title}</h3>
      </div>
      <div className={s.wrap}>
        <h3>{price} тенге</h3>
        <button className={s.editButton}>Edit</button>
        <button className={s.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default DishItem;