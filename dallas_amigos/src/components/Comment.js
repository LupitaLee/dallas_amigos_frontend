import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        console.log("commets",this.props)
        const { comment ,created_at }= this.props.co

        if (comment.comments){
            return null
          }
        
   
  
       return(
           <div className="Comment">
           
             <h6>{comment} - <strong>Posted on</strong> {created_at}</h6> 
      

           </div>
        )
    }
}

export default Comment
