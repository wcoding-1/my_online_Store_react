import { type } from "@testing-library/user-event/dist/type"


const name = (name)=>{
    return{
        type:'name/addname',
        paylaod:name
    }
}
let initialState='james'
export function reducer(state=initialState, action) {
    switch (action.type) {
        case 'name/addname':
            return action.paylaod;
       
    
        default:
            return state;
    }
}

export const verifyName = (state) => state.name