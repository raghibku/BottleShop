const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    const remaining = cart.filter((idx => idx !== id));
    saveCartToLS(remaining);
}


const getTotalAmount = () => {
    const storedAmount = localStorage.getItem('amount');
    if(storedAmount){
        return JSON.parse(storedAmount);
    }
    return null;
}
const saveAmountToLS = amount => {
    const amountStringified = JSON.stringify(amount);
    localStorage.setItem('amount',amountStringified);
}
const addAmountToLS = price => {
    const amount = price;
    saveAmountToLS(amount);
}



export { addToLS , getStoredCart ,removeFromLS,getTotalAmount,addAmountToLS }