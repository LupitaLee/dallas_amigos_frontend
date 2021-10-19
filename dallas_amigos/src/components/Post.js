import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import { Table } from 'react-bootstrap'

export class Post extends Component {

    state={
        count:0

    }

    handleChange =()=>{
        let newCount = this.state.count +1
        this.setState({
            count: newCount
        })
        console.log(newCount)
    }
 



    render() {
        // console.log("post==== ", this.props)
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
                    <td>{Moment(created_at).format('MM-DD-YYYY')}</td>
                    
                    </tr>
                    
                </tbody>
            </Table>

            <button onClick={this.handleChange}>like {this.state.count} </button>

            </div>
        )
    }
}

export default Post
