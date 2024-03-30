export const getPrriceQueryParams = ( searchParams , key , value ) =>{
    const hasVlaueInParams = searchParams.has(key);

    if(value && hasVlaueInParams) {
        searchParams.set(key,value);
    } else if(value) {
        searchParams.append(key,value);
    }else if(hasVlaueInParams) {
        searchParams.delete(key);
    }

    return searchParams;
};

export const caluclateOrderCost = (cartItems) =>{
    const itemsPrice = cartItems?.reduce(
        (acc ,item) => acc + item.price * item.quantity ,0
    );

    const shippingPrice =itemsPrice >=200 ? 0 : 25;
    const taxPrice =Number((0.15* itemsPrice).toFixed(2));
    const totalPrice =Number(itemsPrice + shippingPrice + taxPrice).toFixed(2);

    return {
        itemsPrice : Number(itemsPrice.toFixed(2)),
        shippingPrice,
        taxPrice,
        totalPrice,
    };
};