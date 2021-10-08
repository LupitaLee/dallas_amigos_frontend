import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Category.css"

export class Category extends Component {
    render() {
        const { name , id} = this.props.category

       return(
           <div className="Category">
               <Link className="Category-link" to={`/categories/${id}`}> 
             <h2> {name}</h2> 
               </Link>
           </div>
       )
    }
}

export default Category
