// thunk is middle ware
//that allows us to in our action access to dispatch 
//lets our actions return a function
//this lets us use redux async

// also allows us to passa function to dispatch...

export const fetchCategory = ()=>{
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