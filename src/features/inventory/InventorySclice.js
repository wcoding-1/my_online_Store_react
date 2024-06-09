
import {inventoryData} from '../../data';

export const laodData = () =>{
    return{
        type:'inventory/loadData',
        payload:inventoryData

    }
}

const initialInventoryState = []
export function inventoryReducer(state = initialInventoryState, action){
    switch (action.type) {
        case 'inventory/loadData':
            return action.payload;
    
        default:
            return state;
    }
}