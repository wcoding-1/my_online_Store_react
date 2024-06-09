
export const searchAction = (term)=>{
    return {
        type:'searchTerm/setSearch',
        payload: ''
    }
}

const initialSearch = ''
export function searchReducer(state =initialSearch, action){
    switch (action.type) {
        case 'searchTerm/setSearch':{
            return action.payload
        }
          
        default:
            return state;
    }
}