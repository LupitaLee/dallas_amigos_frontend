
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

            case "ADD_POST":

            const index = state.category.findIndex( c => c.id === action.payload.category_id)
            // console.log("index",index)
            // console.log("payload", action.payload)
            

            const updatedCat ={
                ...state.category[index],
                posts: [...state.category[index].posts, action.payload]
                
            }
            

            return{
                ...state, 
                category: [...state.category.slice(0,index), updatedCat, state.category.slice(index+1)] 
            }



            default:
               return state
        }
    }

export default categoriesReducer