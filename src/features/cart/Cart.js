import { getCurrencySymbol , currencyCovertor} from '../../ultilities/ultilities';
import { useState } from 'react';
import { updateCartQuatity } from './CartSlice';
import { calculateTotal } from '../../ultilities/ultilities';

import './cart.css';
function Cart({cart, dispatch, currencyFilter}){
    const {qty, setQty} = useState(0)
 
    // let getPrice=0;
    let attractName = [];
    for(let item in cart){
        attractName.push(getCartItem(item))
        // getPrice += cart[item].price
        // setPrice()
    }

    const onInputChangeHandler = (name, input) => {
        // If the user enters a bad value...
      
        if (input === '') {
          return;
        }
    
        // Otherwise, convert the input into a number and pass it along as the newQuantity.
        const newQuantity = Number(input);
        alert(typeof newQuantity)
    
        // Dispatch an action to change the quantity of the given name and quantity.
        dispatch(updateCartQuatity(name, newQuantity))
    
      };
       const total = calculateTotal(cart, currencyFilter)
    return(
        <div className="cart_container">
            <ul>{attractName}</ul>

            <div className='total'>
                <h3>
                    Total
                </h3>
                <span>
                  
                    {getCurrencySymbol(currencyFilter)}
                    {total} {currencyFilter}
                </span>
            </div>
        </div>

        
    )

    function getCartItem(name){
        let item = cart[name];
        console.log(item.quantity)
      
        return(
            <>
            <div  className='name'>
                <div>
                    <li key={name}>
                        {name}
                    </li>
                </div>
            
                <div>
                    <select 
                    className="select" 
                    value={item.quantity}
                    onChange={(e)=> onInputChangeHandler(name, e.target.value)}
                  
                    >
                        {[...Array(100)].map((_, index)=>(
                                <option key={index} value={index}>
                                    {index}
                                </option>
                        ))
                        }
                    </select>
                </div> 
            
            </div>
            </>
        )
    }
}

export default Cart;