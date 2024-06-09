import { type } from "@testing-library/user-event/dist/type"

export const currencyFilterAction = (currencysymbol) =>{
    return {
        type:'currency/addCurrency',
        payload: currencysymbol
    }
}

const initialcurrencyState='USD'
export function currencyFilterReducer(state=initialcurrencyState, action){
    switch (action.type) {
        case 'currency/addCurrency':
            return action.payload;
        default:
          return state;
    }
}