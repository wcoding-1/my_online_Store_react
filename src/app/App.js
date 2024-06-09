import  Inventory  from "../features/inventory/Inventory";
import SearcTerm from "../features/search/Search";
import Cart from "../features/cart/Cart";
import CurrencyFilter from "../features/currencyFilter/CurrencyFilter";

function App({state, dispatch}) {
  const allInventory = inventoryFilter(state.inventory, state.searchTerm);
  
  
 
  return (
    <div className="main">
      <CurrencyFilter 
      currencyFilter={state.currency}
      dispatch={dispatch}
      />
      <SearcTerm search={state.searchTerm}/>
      <Inventory 
       inventory={allInventory}
      dispatch={dispatch}
      currencyFilter={state.currency}
      />
      <Cart 
      cart={state.cart} dispatch={dispatch} 
      currencyFilter={state.currency}/>


    </div>
  );

 function inventoryFilter(inventory, search) {
    return inventory.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()));
  }
 }






export default App;
