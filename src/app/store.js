import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { cartReducer } from "../features/cart/CartSlice";
import { inventoryReducer } from "../features/inventory/InventorySclice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { searchReducer } from "../features/search/SearchSlice";
import {reducer} from '../experiment/experiment'
const rootReducer = combineReducers({
    cart:cartReducer,
    inventory:inventoryReducer,
    currency:currencyFilterReducer,
    searchTerm:searchReducer,
    name: reducer
});


const store = createStore(rootReducer)

export default store;
