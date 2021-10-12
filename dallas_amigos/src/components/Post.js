import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Post.css"
import { Table } from 'react-bootstrap'

export class Post extends Component {
    render() {
        console.log("post==== ", this.props)
        const {title ,id, category_id , created_at} = this.props.p
    
        return(
            <div className="Post">
         
                {/* <Link className="Post-link" to={`/categories/${category_id}/posts/${id}/comments`}>
                <h3>{title} </h3> 
                
                </Link> */}

            <Table striped bordered hover>
  
                <tbody>
                    <tr>
                    <td>
                        <Link className="Post-link" to={`/categories/${category_id}/posts/${id}/comments`}>
                        {title}
                    
                        </Link>
                    </td>
                    <td>{created_at}</td>
                    
                    </tr>
                    
                </tbody>
            </Table>

            </div>
        )
    }
}

export default Post
