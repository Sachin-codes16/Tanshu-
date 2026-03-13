import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';
import { addToCart } from "../../store/slices/cartSlice";
import api from "../../api";
import Product from './product'
import ProductTabs from './alltab';
import Logo from '../../images/logo.svg'


const ProductSinglePage = (props) => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const products = api();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const found = products.find((p) => String(p.id) === String(id));
        setProduct(found || null);
    }, [id, products]);

    const addToCartProduct = (item, qty = 1) => {
        dispatch(addToCart({ ...item, qty }));
    };


    return (
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Product Single'} pagesub={'Product Single'} />
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {product && (
                        <Product item={product} addToCart={addToCartProduct} />
                    )}
                    <ProductTabs />
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ProductSinglePage;
