import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from '../../redux/api/productsApi';
import { toast } from 'react-hot-toast';
import Loader from '../layout/Loader';
import StarRatings from "react-star-ratings";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../redux/features/cartSlice";

const ProductDetails = () => {

    const params = useParams();
    const dispatch = useDispatch(); // Add this line to get dispatch

    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState("");

    const { data, isLoading, error, isError } = useGetProductDetailsQuery(
        params?.id
    );
    const product = data?.product;

    useEffect(() => {
        setActiveImg(
            product?.images[0]
                ? product?.images[0]?.url
                : "/images/default_product.png"
        );
    }, [product]);

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message);
        }
    }, [isError]);

    const increseQty = () => {
        if (quantity >= product?.stock) return;
        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreseQty = () => {
        if (quantity <= 1) return;
        const qty = quantity - 1;
        setQuantity(qty);
    };

    const setItemToCart = () => {
        const cartItem = {
            product: product?._id,
            name: product?.name,
            price: product?.price,
            image: product?.images[0]?.url,
            stock: product?.stock,
            quantity,
        };

        dispatch(setCartItem(cartItem));
        toast.success("Item added to Cart");
    };

    if (isLoading) return <Loader />;

    return (
        <div className="row d-flex justify-content-around">
            {/* Your JSX code */}
        </div>
    );
};

export default ProductDetails;
