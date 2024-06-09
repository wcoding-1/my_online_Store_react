import { useEffect } from "react";
import { laodData } from "./InventorySclice";
import { getCurrencySymbol } from "../../ultilities/ultilities";
import { currencyCovertor } from "../../ultilities/ultilities";
import { addItemAction } from "../cart/CartSlice";

import './inventory.css';

function Inventory({inventory, dispatch, currencyFilter}){

    const loadItem = ()=>{
        dispatch(laodData())
    }
    useEffect(loadItem ,[]);


    const addToCard =(item)=>{
        dispatch(addItemAction(item))
    }

    return(
        
        <ul id="inventory_container">{inventory.map(addInventories)}</ul>
       
    );

    function addInventories(item){
        return(
           
                <li className="inventory" key={item.price}>
                 
             
                        <img src={item.img} alt="item"/>
                  
                 
                        <h3>{item.name}</h3>
                        <h3 className="item_price">
                            {getCurrencySymbol(currencyFilter)}
                            {currencyCovertor(item.price, currencyFilter).toFixed(2)} {currencyFilter}
                        </h3>
                        <button onClick={()=>addToCard (item)}>Add to Cart</button>
                    
                </li>
          
        )

    };
}

export default Inventory