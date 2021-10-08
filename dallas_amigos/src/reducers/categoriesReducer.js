
export const initialState ={
    category:[]
}
const categoriesReducer = (state = initialState, action ) =>{
    switch(action.type) {
        case "GET_CATEGORY":
            return {
                ...state, //return our state with everything in it which is store:
                category: [...action.payload]
                
                //[...state.store, we are spreading what ever we have there already . ...action.payload] then we spread out the payload that we get from
            }
        }
    }

    export default categoriesReducer