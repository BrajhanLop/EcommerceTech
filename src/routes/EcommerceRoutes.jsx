import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Sidebar from '../components/Header/Sidebar';
import SubnavBar from '../components/Header/SubnavBar';
import CartProduct from '../pages/Cart/CartProduct';
import Chekin from '../pages/Chekin/Chekin';
import ProductDetail from '../pages/detail/ProductDetail';
import Home from '../pages/Home/Home';
import NotFound from '../pages/nofound/NotFound';


const EcommerceRoutes = () => {

    const[ activesidle, setactivesidle] = useState(false)

    const activeSidleHandler = () => {
        setactivesidle(!activesidle)
    }

    return (
        <>
            <Sidebar activesidle={activesidle} activeSidleHandler={activeSidleHandler}/>
            <Navbar activeSidleHandler={activeSidleHandler}/>
            <SubnavBar/>
            <Routes>
                <Route path='/' element= { <Home/> } />
                <Route path='/category/:cat' element= { <Home/> } />
                <Route path='/item/:id' element= { <ProductDetail /> } />
                <Route path='/cart' element= { <CartProduct/> } />
                <Route path='/checkin' element= { <Chekin/>} />
                <Route path='*' element= { <NotFound/>} />
                <Route path='item/*' element= { <NotFound/>} />
            </Routes>
       
        </>
    );
};

export default EcommerceRoutes;