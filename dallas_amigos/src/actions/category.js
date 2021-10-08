

export const ferchCategory =()=>{
    return(dispatch)=>{
         // now that we using thunk we can return using dispatch -to dispatch a type and payload to our reducer.
         fetch("http://localhost:3000/api/categories")
         .then(res => res.json() )
         .then(categories => {
             dispatch({
                 type: "GET_CATEGORY",
                 payload: categories
             })
         })
    }
}