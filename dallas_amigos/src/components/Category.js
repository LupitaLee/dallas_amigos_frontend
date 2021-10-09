import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Category.css"




export class Category extends Component {

    
    render() {
        // console.log(this.props)
        // console.log(this.props.category)
      
        const { name , id} = this.props.category

       return(
           <div className="Category">
               <Link className="Category-link" to={`/categories/${id}/posts`}> 
             <h2> {name}</h2> 
               </Link>
           </div>
       )
    }
}

export default Category
