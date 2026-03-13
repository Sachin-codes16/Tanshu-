import React, {Fragment} from 'react';
import { useSelector } from "react-redux";
import Navbar from '../../components/Navbar';
import PageTitle from "../../components/pagetitle";
import CheckoutSection from '../../components/CheckoutSection'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import Footer from '../../components/footer';

const CheckoutPage =() => {
    const cartList = useSelector((state) => state.cart.cart);
    return(
        <Fragment>
            <Navbar  Logo={Logo}/>
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default CheckoutPage;
