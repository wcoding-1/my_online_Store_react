
export const currencyCovertor = (price, currency) =>{
    switch (currency) {
        case 'EUR':
          return price * 0.86;
        case 'CAD':
          return price * 1.33;
        default:
          return price;
}
}


export const calculateTotal = (cart, currency)=>{
  let totalUSD =0;
  // console.log(cart)
  Object.keys(cart).forEach((item)=>{
    console.log(typeof cart[item].quantity)
    totalUSD += cart[item].price * cart[item].quantity;
  })
  return currencyCovertor(totalUSD, currency).toFixed(2)
}

export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'CAD':
        return '$';
      default:
        return '';
    }
  }