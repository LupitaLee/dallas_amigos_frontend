import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Post extends Component {
    render() {
        const {title ,id, category_id } = this.props.p
    
        return(
            <div className="Post">
           <Link to={`/categories/${category_id}/posts/${id}`}>
           <h3>{title} </h3> 
           
           </Link>

         
          
          
            </div>
        )
    }
}



export default Post
