import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Post.css"

export class Post extends Component {
    render() {
        console.log("post==== ", this.props)
        const {title ,id, category_id } = this.props.p
    
        return(
            <div className="Post">
         
          <Link className="Post-link" to={`/categories/${category_id}/posts/${id}/comments`}>
           <h3>{title} </h3> 
           
           </Link>

            </div>
        )
    }
}

export default Post
