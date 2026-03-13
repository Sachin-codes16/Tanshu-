import { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import api from "../../api";
import Navbar from '../../components/Navbar';
import Logo from '../../images/logo.svg'
import Footer from '../../components/footer';
import Shop from '../../components/Shop';

const ShopPage = () => {

    const dispatch = useDispatch();

    const products = api();

    const addToCartProduct = (product, qty = 1) => {
        dispatch(addToCart({ ...product, qty }));
    };

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
            <section className="wpo-shop-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Shop
                                addToCartProduct={addToCartProduct}
                                products={products}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ShopPage;