import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../store/dishesAction';
import { fetchOrders } from '../../store/ordersAction';
import { removeOrder } from '../../store/ordersSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Dish } from '../../types';
import s from './OrdersPage.module.scss';

const DELIVERY_FEE = 1000;

const OrdersPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const orders = useSelector((state: RootState) => state.orders.items);
    const dishes = useSelector((state: RootState) => state.dishes.items);

    useEffect(() => {
        dispatch(fetchOrders());
        dispatch(fetchDishes());
    }, [dispatch]);

    const calculateTotal = (orderItems: Record<string, number>, allDishes: Dish[]) => {
        let total = 0;
        for (const dishId in orderItems) {
            const quantity = orderItems[dishId];
            const dish = allDishes.find(d => d.id === dishId);
            if (dish) {
                total += dish.price * quantity;
            }
        }
        total += DELIVERY_FEE;
        return total;
    };

    const handleCompleteOrder = async (orderId: string) => {
        dispatch(removeOrder(orderId));
        await axios.delete(`http://localhost:3001/orders/${orderId}`);
    };

    return (
        <div className={s.ordersPage}>
            <h2 className={s.title}>Orders</h2>
            <div className={s.ordersList}>
                {orders.map(order => {
                    const totalPrice = calculateTotal(order.items, dishes);
                    return (
                        <div key={order.id} className={s.orderCard}>
                            {Object.entries(order.items).map(([dishId, quantity]) => {
                                const dish = dishes.find(d => d.id === dishId);
                                if (!dish) return null;
                                return (
                                    <p key={dishId} className={s.orderItem}>
                                        {quantity} X {dish.title} - {dish.price * quantity} тенге
                                    </p>
                                );
                            })}
                            <p className={s.delivery}>Delivery: {DELIVERY_FEE}</p>
                            <p className={s.total}>Order total: {totalPrice} тенге</p>
                            <button className={s.completeButton} onClick={() => handleCompleteOrder(order.id)}>
                                Complete order
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrdersPage;