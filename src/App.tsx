import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './layout/Layout'
import DishesPages from './pages/DishesPage/DishesPages'
import OrdersPage from './pages/OrderPage/OrdersPage'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/dishes' element={<DishesPages />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
