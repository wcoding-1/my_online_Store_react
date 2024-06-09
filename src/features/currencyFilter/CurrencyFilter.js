import { currenciesData } from "../../data"
import { currencyFilterAction } from "./currencyFilterSlice";
import './currency.css';

function CurrencyFilter({currencyFilter, dispatch}) {
const getCurrencyFilter =(currency)=>{
    dispatch(currencyFilterAction(currency))
}

    return(
        <div className="button_container">
            <h2>Chose a Currency</h2>
        {
            currenciesData.map((currency)=>(
                <button onClick={()=>getCurrencyFilter(currency)}>{currency}</button>
            ))
        }
        
        </div>
    )
    
}

export default CurrencyFilter;