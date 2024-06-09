
//cart action creators
export const addItemAction = (item)=>{
    return{
        type:'cart/addItem',
        payload:item,
        quantity: 0
        
    }
}

export const updateCartQuatity = (name, newQuatity) =>{
    return {
        type:'cart/updateCartQuatity',
        payload:{
            name: name,
           quantity: newQuatity
        }
    }
}

const initialCartState={}
export function cartReducer(cart = initialCartState, action){
    switch (action.type) {
        case 'cart/addItem':{
            const {name, price} = action.payload;
           const quantity = cart[name]? cart[name].quantity + 1 : 1;

           const updatedCart = {
            ...cart,
            price:price,
            quantity:quantity
           }

           return {
            ...cart,
            [name]:updatedCart 
           }

        }
        case 'cart/updateCartQuatity':{
            const {name, newQuatity} = action.payload
            const itemToUpdate = cart[name];

            const updateItem = {
                ...itemToUpdate,
                quantity : newQuatity
                
            }

            return {
                ...cart,
                [name]:updateItem
            }

           

        }  
         
        default:
          return cart;
    }

}