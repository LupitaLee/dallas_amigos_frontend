
export const initialState ={
    category:[]
}
const categoriesReducer = (state = initialState, action ) =>{
    switch(action.type) {
        case "GET_CATEGORY":
            return {
                ...state, //return our state with everything in 
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



            case "ADD_COMMENT":
                // debugger
                // console.log("payload",action.payload)
               
                const catIndex = state.category.findIndex( c => c.id  === action.payload.category_id)
            //   console.log("catIndex",catIndex)
                const postIndex = state.category[catIndex].posts.findIndex(co => co.id === action.payload.post_id)
                // console.log("posttIndex",postIndex)

                const updatedPost ={
                    ...state.category[catIndex].posts[postIndex],
                    comments: [...state.category[catIndex].posts[postIndex].comments, action.payload]
                 }

                const updatedCat1 ={
                   
                    ...state.category[catIndex],
               
                    posts: [...state.category[catIndex].posts.slice(0,postIndex), updatedPost, state.category[catIndex].posts.slice(postIndex+1)]
                    
                }
              debugger

    
                return{
                    ...state, 
                    category: [...state.category.slice(0,catIndex), updatedCat1, state.category.slice(catIndex+1)] 
                }

    



            default:
               return state
        }
    }

export default categoriesReducer