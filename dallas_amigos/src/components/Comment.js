import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        const { comment ,created_at, post_id} = this.props.co
  
       return(
           <div className="Comment">
           
             <h6>{comment} - <strong>Posted on</strong> {created_at}</h6> 
      

           </div>
        )
    }
}

export default Comment
