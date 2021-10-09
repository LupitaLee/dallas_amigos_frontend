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


// export const addCat =(catObj)=>{
//     return{
//         type: "ADD_POST",
//         payload: catObj
        
//     }
// }

// export const createCategory=(category)=>{
//     // debugger
//     return(dispatch)=>{
//         fetch(`http://localhost:3000/api/categories`,{

//             method: "Post",
//             headers:{
//                 'Content-Type': 'application/json',
//                 'accept': 'application/json'
//             },
//             body: JSON.stringify({category}), // we passing the object ,
//         })
//         .then(res => res.json())
//         .then(c =>{
//             dispatch(addCat(c))
//         })
//     }
// }


// export const addPost =(postObj)=>{
//     console.log(postObj)
//     return{
//         type: "ADD_POST",
//         payload: postObj
        
//     }
// }

// // {title:"nameof title", content: "dfdsfdfs"}
// //{post:post} === {post}   -what js does is jsut pass {post} and that will equal
// export const createPost=(post)=>{
//     // debugger
//     return(dispatch)=>{
//         fetch(`http://localhost:3000/api/categories/${post.category_id}/posts`,{

//             method: "Post",
//             headers:{
//                 'Content-Type': 'application/json',
//                 'accept': 'application/json'
//             },
//             body: JSON.stringify({post}), // we passing the object ,
//         })
//         .then(res => res.json())
//         .then(p =>{
//             dispatch(addPost(p))
//         })
//     }
// }


